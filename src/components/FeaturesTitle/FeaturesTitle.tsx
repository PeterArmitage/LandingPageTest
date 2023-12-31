/* eslint-disable max-len */
import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { Icon24Hours, IconFlame, IconCircleDotted, IconTruck } from '@tabler/icons-react';
import classes from './FeaturesTitle.module.css';
import AppointmentCard from '../Appointments/AppointmentCardCat';

export function FeaturesTitle() {
    const [opened, { open, close }] = useDisclosure(false);
    const { t } = useTranslation();

const features = [
  {
    id: 1,
    icon: Icon24Hours,
    title: t('featuresArray.0.title'),
    description: t('featuresArray.0.description'),
  },
  {
    id: 2,
    icon: IconTruck,
    title: t('featuresArray.1.title'),
    description: t('featuresArray.1.description'),
  },
  {
    id: 3,
    icon: IconCircleDotted,
    title: t('featuresArray.2.title'),
    description: t('featuresArray.2.description'),
  },
  {
    id: 4,
    icon: IconFlame,
    title: t('featuresArray.3.title'),
    description: t('featuresArray.2.description'),
  },
];
  const items = features.map((feature) => (
    <div key={feature.title} data-aos="flip-down" data-aos-delay="500" data-aos-duration="1000">
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {t(feature.title)}
      </Text>
      <Text c="dimmed" fz="sm">
        {t(feature.description)}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper} data-aos="flip-left" data-aos-delay="250" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            {t('featuresTitleHeader')}
          </Title>
          <Text c="dimmed">
            {t('featuresText')}
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
            onClick={open}
          >
            {t('schedule')}
          </Button>
          <Modal opened={opened} onClose={close} title="Appointment Sheet">
       <AppointmentCard />
          </Modal>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
