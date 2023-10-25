/* eslint-disable max-len */
import { Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import classes from './FeaturesServices.module.css';

export function FeaturesServices() {
  const { t } = useTranslation();
const data = [
  {
    id: 1,
    image: <Icon icon="zondicons:inbox-check" width="30" height="30" />,
    title: t('dataArray.0.title'),
    description: t('dataArray.0.description'),
  },
  {
    id: 2,
    image: <Icon icon="fa:bath" width="30" height="30" />,
    title: t('dataArray.1.title'),
    description: t('dataArray.1.description'),
  },
  {
    id: 3,
    image: <Icon icon="jam:hairdryer-f" width="30" height="30" />,
    title: t('dataArray.2.title'),
    description: t('dataArray.2.description'),
  },
  {
    id: 4,
    image: <Icon icon="game-icons:delicate-perfume" width="30" height="30" />,
    title: t('dataArray.3.title'),
    description: t('dataArray.3.description'),
  },
];

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

      <Text className={classes.supTitle}>{t('routine')}</Text>

      <Title className={classes.title} order={2}>
        {t('serviceTitle')}
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          {t('goal')}
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
      </div>
    </Container>

  );
}
