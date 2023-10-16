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
  const { t } = useTranslation(['translation', 'title', 'titleSpan']);
  return (
    <Container size="md">
      <div className={classes.inner} data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
        <div className={classes.content}>
          <Title className={classes.title}>
             {t('first')}<span className={classes.highlight}>{t('titleSpan')}</span>{t('title')}
          </Title>
          <Text c="dimmed" mt="md">
            We provide high quality grooming services for both cats and dogs at the comfort of your
            own home using our state of the art in-van grooming station.
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
              <b>Easy booking system</b> – Schedule appointments that suit your
              needs and availability.
            </List.Item>
            <List.Item>
              <b>No appointment waiting</b> – Skip the line and have us brought
              to your front doorstep.
            </List.Item>
            <List.Item>
              <b>Medicinal Bathing</b> – We can take care of special types of
              baths to take care of your pets conditions.
            </List.Item>
          </List>

          <Group mt={30}>
          <Button radius="xl" size="md" className={classes.control} onClick={open}>
              Schedule appointment

          </Button>
            <Modal opened={opened} onClose={close} title="Appointment Sheet">
       <AppointmentCard />
            </Modal>
            <Button radius="xl" size="md" className={classes.control}>
              Contact us
            </Button>
          </Group>

        </div>

        <Image src={cat} className={classes.image} />

       <br />

      </div>
    </Container>
  );
}
