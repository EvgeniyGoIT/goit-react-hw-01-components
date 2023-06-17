import PropTypes from 'prop-types';
import { TransactionTable, TableHeadRow, TableRow } from './Transactions.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <thead>
        <TableHeadRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHeadRow>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};