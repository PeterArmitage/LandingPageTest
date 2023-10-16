import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { HeaderSimple } from './components/Header/HeaderSimple';
import { HeroBullets } from './components/Hero/HeroBullets';
import { FeaturesTitle } from './components/FeaturesTitle/FeaturesTitle';
import { FooterSocial } from './components/Footer/FooterSocial';
import { FeaturesCards } from './components/FeaturesCard/FeaturesCards';
import { FeaturesServices } from './components/FeaturesCard/FeaturesServices';
import  GetInTouch  from './Contacts/GetInTouch';
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
      <HeaderSimple/>
      <HeroBullets />
      <FeaturesTitle />
      <FeaturesCards />
      <FeaturesServices />
      <GetInTouch /> 
      <FooterSocial />
    </MantineProvider>
  );
}
