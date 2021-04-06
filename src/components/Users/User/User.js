import React from 'react';
import * as PropTypes from 'prop-types';

import classes from './User.module.css';

import Aux from '../../../hoc/Aux/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const user = props => (
	<Aux>
		<AuthContext.Consumer>
			{context => context.loggedIn ? <p>Logged In</p> : <p>Please login</p>}
		</AuthContext.Consumer>
		<p onClick={props.onClick}>
			I'm {props.name} and I am {props.age} years old!
		</p>
		<p>{props.children}</p>
		<input
			type="text"
			ref={() => {
			}}
			onChange={props.onChange}
			value={props.name}
		/>
	</Aux>
);

user.defaultProps = {
	id: '',
	name: '',
	age: 0,
	onClick: () => {
	},
	onChange: () => {
	}
};

user.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
};

export default withClass(user, classes.user);
