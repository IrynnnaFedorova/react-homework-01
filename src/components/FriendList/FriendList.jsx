import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem/FriendListItem";

import classes from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={classes.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={classes.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
