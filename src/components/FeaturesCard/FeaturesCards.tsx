/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { useTranslation } from 'react-i18next';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
  import classes from './FeaturesCards.module.css';

  export function FeaturesCards() {
    const theme = useMantineTheme();
    const { t } = useTranslation();
    const mockdata = [
      {
        id: 1,
        title: t('mockDataArray.0.title'),
        description: t('mockDataArray.0.description'),
        icon: IconGauge,
      },
      {
        id: 2,
        title: t('mockDataArray.1.title'),
        description: t('mockDataArray.1.description'),
        icon: IconUser,
      },
      {
        id: 3,
        title: t('mockDataArray.2.title'),
        description: t('mockDataArray.2.description'),
        icon: IconCookie,
      },
    ];
    const features = mockdata.map((feature) => (
      <div data-aos="zoom-in-right" data-aos-delay="500" data-aos-duration="1000">

      <Card key={feature.id} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
      </div>
    ));

    return (
      <Container size="lg" py="xl">
        <div data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="1000">

        <Group justify="center">
          <Badge variant="filled" size="lg">
            {t('convenient')}
          </Badge>
        </Group>

        </div>
        <div data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="1000">

        <Title order={2} className={classes.title} ta="center" mt="sm">
          {t('lineSkip')}
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
              {t('lineSkipText')}

        </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }
