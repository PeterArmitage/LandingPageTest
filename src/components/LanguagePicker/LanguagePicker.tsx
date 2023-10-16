import { useState } from 'react';
import { UnstyledButton, Menu, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import classes from './LanguagePicker.module.css';

export function LanguagePicker() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
   i18n.changeLanguage(lng);
};
const data = [
  { label: 'English',
  image: <Icon
    icon="circle-flags:uk"
    width="18"
    height="18"
    onClick={() => changeLanguage('en')}
  /> },
 { label: 'Portugues',
 image: <Icon
   icon="circle-flags:br"
   width="18"
   height="18"
   onClick={() => changeLanguage('br')}
 /> },
];

  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  const items = data.map((item) => (
    <Menu.Item
      leftSection={item.image}
      onClick={() => {
        setSelected(item);
        item.label === 'English' ? changeLanguage('en') : changeLanguage('br');
      }}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
          <Group gap="xs">
            {selected.image}
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
