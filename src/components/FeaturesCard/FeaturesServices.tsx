/* eslint-disable max-len */
import { Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
import classes from './FeaturesServices.module.css';
import data from './Data';

export function FeaturesServices() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.id}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
         {item.image}
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (

    <Container size={700} className={classes.wrapper}>
      <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">

      <Text className={classes.supTitle}>Our Routine</Text>

      <Title className={classes.title} order={2}>
        Come and get to know our service.
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Our goal is to provide the best grooming service possible, while providing a safe and calming environment. We value your time,
          and so we have a routine to follow that will get us in and out in no time, so you dont have to wait around all day.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
      </div>
    </Container>

  );
}
