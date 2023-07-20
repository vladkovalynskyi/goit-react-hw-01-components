import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={css.transaction_history}>
    <thead className={css.table_head}>
      <tr>
        <th className={css.table_head_row}>Type</th>
        <th className={css.table_head_row}>Amount</th>
        <th className={css.table_head_row}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr className={css.table_row} key={item.id}>
          <td className={css.column1}>
            <span className={css.column1}>{item.type}</span>
            {item.type}
          </td>
          <td className={css.column2}>{item.amount}</td>
          <td className={css.column3}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default TransactionHistory;