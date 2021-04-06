import React, { useContext, useEffect, useRef } from 'react';
import * as PropTypes from 'prop-types';

import classes from './Cockpit.module.css';

import Aux from '../../hoc/Aux/Aux';
import withClass from '../../hoc/withClass';
import AuthContext from '../../context/auth-context';

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const cockpit = props => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const toggleButtonRef = useRef(null);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const authContext = useContext(AuthContext);
	console.log('[Cockpit.js] authContext', authContext);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');

		return () => {
			console.log('[Cockpit.js] cleanup work in useEffect');
		};
	}, []);

	let btnClass = '';

	if (props.showUsers) {
		btnClass = classes.Red;
	}

	return (
		<Aux>
			<h1>{props.appTitle}</h1>
			<button
				ref={toggleButtonRef}
				className={btnClass}
				onClick={props.toggleUsers}
			>
				Toggle Users
			</button>
			<AuthContext.Consumer>
				{context => <button onClick={context.loginUser}>Login User</button>}
			</AuthContext.Consumer>
		</Aux>
	);
};

cockpit.defaultProps = {
	appTitle: '',
	showUsers: true,
	toggleUsers: true
};

cockpit.propTypes = {
	appTitle: PropTypes.string,
	showUsers: PropTypes.bool,
	toggleUsers: PropTypes.func
};

export default withClass(cockpit, classes.cockpit);
