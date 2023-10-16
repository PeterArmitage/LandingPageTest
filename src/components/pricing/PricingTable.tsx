import { Table } from '@mantine/core';
import prices from './GroomingPrices';

function PricingTable() {
  const rows = prices.map((price) => (
    <Table.Tr key={price.id}>
      <Table.Td>{price.service}</Table.Td>
      <Table.Td>{price.price}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Service</Table.Th>
          <Table.Th>Price</Table.Th>
          
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default PricingTable