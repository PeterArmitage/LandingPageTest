import { Container, Burger, Image, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Pugito from './pugito.png';
import { LanguagePicker } from '../LanguagePicker/LanguagePicker';
import classes from './HeaderSimple.module.css';
import Pricing from '../pricing/Pricing';

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header} data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
      <Container size="md" className={classes.inner}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Container size="sm" className={classes.image}>
        <Image src={Pugito} h={100} w={100} className={classes.dog} />
      <Text size="xl" className={classes.company}><span className={classes.span}>Pawsome</span> Makeovers</Text>
        </Container>
      </Container>
        <Pricing />
        <LanguagePicker />
    </header>
  );
}
