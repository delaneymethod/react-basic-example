import React from 'react';

import classes from './User.module.css';

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const User = props => (
  <div className={classes.User}>
    <p onClick={props.onClick}>
      I'm {props.name} and I am {props.age} years old!
    </p>
    <p>{props.children}</p>
    <input
      type="text"
      onChange={props.onChange}
      value={props.name}
    />
  </div>
);

export default User;
