import React from "react";
import PropTypes from "prop-types";

import FriendLis from "../FriendList";

import classes from "./FriendList.css";

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