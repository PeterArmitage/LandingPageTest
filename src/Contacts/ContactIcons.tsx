import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

export function ContactIconsList() {
  const { t } = useTranslation();
const MOCKDATA = [
  { title: t('contactArray.0.title'), description: 'example@gmail.com', icon: IconAt },
  { title: t('contactArray.1.title'), description: '+123456789', icon: IconPhone },
  { title: t('contactArray.2.title'), description: 'example address, 75 road', icon: IconMapPin },
  { title: t('contactArray.3.title'), description: '7 a.m. – 9 p.m.', icon: IconSun },
];
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
