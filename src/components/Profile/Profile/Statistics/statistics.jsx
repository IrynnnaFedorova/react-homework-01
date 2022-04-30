import React from "react";
import PropTypes from "prop-types";
import { getBgColor } from "../../js/functions";

import classes from "./statistics.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}
      <ul className={classes.statList}>
        {stats.map(({ label, id, percentage }) => (
          <li
            className={classes.item}
            key={id}
            style={{ background: getBgColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
