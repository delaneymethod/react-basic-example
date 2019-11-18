import React from 'react';

import classes from './Person.module.css';

const Person = props => (
  <div className={classes.Person}>
    <p onClick={props.click}>
      I'm {props.name} and I am {props.age} years old!
    </p>
    <p>{props.childrens}</p>
    <input
      type="text"
      onChange={props.changed}
      value={props.name}
    />
  </div>
);

export default Person;
