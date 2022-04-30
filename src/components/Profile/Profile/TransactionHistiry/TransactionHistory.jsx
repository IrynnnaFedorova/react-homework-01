import React from "react";
import PropTypes from "prop-types";

import classes from "./TransactionHistory.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={classes.transactionHistory}>
      <thead className={classes.thead}>
        <tr>
          <th className={classes.th}>Type</th>
          <th className={classes.th}>Amount</th>
          <th className={classes.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={classes.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={classes.tr} key={id}>
            <td className={classes.td}>{type}</td>
            <td className={classes.td}>{amount}</td>
            <td className={classes.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
