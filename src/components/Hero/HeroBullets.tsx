import { Image,
  Container,
  Title,
  Button,
  Modal,
  Group,
  Text, List, ThemeIcon, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCheck } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import cat from './cat.png';
import classes from './HeroBullets.module.css';

import AppointmentCard from '../Appointments/AppointmentCardCat';

export function HeroBullets() {
  const [opened, { open, close }] = useDisclosure(false);
  const { t } = useTranslation();
  return (
    <Container size="md">
      <div className={classes.inner} data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
        <div className={classes.content}>
          <Title className={classes.title}>
             {t('first')}<span className={classes.highlight}>{t('titleSpan')}</span>{t('title')}
          </Title>
          <Text c="dimmed" mt="md">
           {t('grooming.groomTitle')}
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>{t('grooming.bulletOneTitle')}</b> {t('grooming.bulletOne')}
            </List.Item>
            <List.Item>
              <b>{t('grooming.bulletTwoTitle')}</b> {t('grooming.bulletTwo')}
            </List.Item>
            <List.Item>
              <b>{t('grooming.bulletThreeTitle')}</b> {t('grooming.bulletThree')}
            </List.Item>
          </List>

          <Group mt={30}>
          <Button radius="xl" size="md" className={classes.control} onClick={open}>
              {t('grooming.appointment')}

          </Button>
            <Modal opened={opened} onClose={close} title="Appointment Sheet">
       <AppointmentCard />
            </Modal>
            <Button radius="xl" size="md" className={classes.control}>
              {t('grooming.contact')}
            </Button>
          </Group>

        </div>

        <Image src={cat} className={classes.image} />

       <br />

      </div>
    </Container>
  );
}
