import React from 'react';

import classes from './Cockpit.module.css';

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Cockpit = props => {
	let btnClass = '';

	if (props.showUsers) {
		btnClass = classes.Red;
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.appTitle}</h1>
			<button
				className={btnClass}
				onClick={props.toggleUsers}
			>
				Toggle Users
			</button>
		</div>
	);
};

export default Cockpit;
