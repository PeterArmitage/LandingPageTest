import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { ContactIconsList } from './ContactIcons';
import bg from './bg.svg';
import classes from './GetInTouch.module.css';

export default function GetInTouch() {
  const { t } = useTranslation();
  return (

    <Paper radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ backgroundImage: `url(${bg})` }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            {t('contactInfo')}
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="lg" fw={700} className={classes.title}>
            {t('getInTouch')}
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label={t('fieldTitle.0.title')} placeholder={t('fieldTitle.0.description')} />
              <TextInput label={t('fieldTitle.1.title')} placeholder={t('fieldTitle.1.description')} required />
            </SimpleGrid>

            <TextInput mt="md" label={t('fieldTitle.2.title')} placeholder={t('fieldTitle.2.description')} required />

            <Textarea
              mt="md"
              label={t('fieldTitle.3.title')}
              placeholder={t('fieldTitle.3.description')}
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                {t('sendMsg')}
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
