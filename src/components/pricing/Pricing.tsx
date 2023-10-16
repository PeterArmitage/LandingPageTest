import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import PricingTable from './PricingTable';
import classes from './pricing.module.css';

const Pricing = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Pricing">
       <PricingTable />
      </Modal>

      <Button onClick={open} className={classes.button}>Pricing</Button>
    </>
  );
}

export default Pricing

