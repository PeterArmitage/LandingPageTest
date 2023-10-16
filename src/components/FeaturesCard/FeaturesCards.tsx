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
  import mockdata from './Mockdata';
  import classes from './FeaturesCards.module.css';
  
 
  export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <div data-aos="zoom-in-right" data-aos-delay='500' data-aos-duration='1000'>

      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
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
        <div data-aos="zoom-in-down" data-aos-delay='500' data-aos-duration='1000'>

        <Group justify="center">
          <Badge variant="filled" size="lg">
            We are convenient
          </Badge>
        </Group>
  
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='500' data-aos-duration='1000'>

        <Title order={2} className={classes.title} ta="center" mt="sm">
          Skip the waiting line and let us come to you.
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Ever arrive for your appointment on time only to have to wait even longer? That wont happen with us.
        </Text>
        </div>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }