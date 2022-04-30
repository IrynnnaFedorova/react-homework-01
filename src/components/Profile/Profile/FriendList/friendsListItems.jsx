import React from "react";
import PropTypes from "prop-types";

import classes from "./FriendListItem.css";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <>
      <span
        className={[
          classes.status,
          isOnline ? classes.online : classes.offline,
        ].join(" ")}
      ></span>
      <img
        className={classes.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;