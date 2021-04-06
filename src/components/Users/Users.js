import React from 'react';
import * as PropTypes from 'prop-types';

import User from './User/User';

const users = props => props.showUsers ? props.users.map((user, index) => (
	<User
		key={user.id}
		name={user.name}
		age={user.age}
		onClick={() => props.onClick(index)}
		onChange={event => props.onChange(event, index)}
	/>
)) : null;

users.defaultProps = {
	users: [
		{ id: '', name: '', age: 0 }
	],
	showUsers: false,
	onClick: () => {
	},
	onChange: () => {
	}
};

users.propTypes = {
	users: PropTypes
		.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				age: PropTypes.number.isRequired
			})
		)
		.isRequired,
	showUsers: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
};

export default users;
