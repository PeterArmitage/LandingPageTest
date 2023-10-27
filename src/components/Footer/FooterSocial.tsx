import { Container, Group, ActionIcon, rem, Anchor } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

import classes from './FooterSocial.module.css';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>

        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <Anchor href="www.twitter.com" target="_blank">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          </Anchor>
          <Anchor href="www.youtube.com" target="_blank">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          </Anchor>
          <Anchor href="www.instagram.com" target="_blank">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          </Anchor>
        </Group>

      </Container>
    </div>
  );
}
