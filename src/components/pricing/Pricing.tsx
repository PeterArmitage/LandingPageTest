import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import PricingTable from './PricingTable';
import classes from './pricing.module.css';

const Pricing = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { t } = useTranslation();

  return (
    <>
      <Modal opened={opened} onClose={close} title="Pricing">
       <PricingTable />
      </Modal>

      <Button onClick={open} className={classes.button}>{t('pricingButton')}</Button>
    </>
  );
};

export default Pricing;
