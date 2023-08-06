import styles from './transactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={item.id}>
              <td
                className={index % 2 !== 0 ? styles.bgcSilver : styles.bgcWhite}
              >
                {item.type}
              </td>
              <td
                className={index % 2 !== 0 ? styles.bgcSilver : styles.bgcWhite}
              >
                {item.amount}
              </td>
              <td
                className={index % 2 !== 0 ? styles.bgcSilver : styles.bgcWhite}
              >
                {item.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
