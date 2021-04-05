import React from 'react';

import User from './User/User';

const Users = props => props.showUsers ? props.users.map((user, index) => (
	<User
		key={user.id}
		name={user.name}
		age={user.age}
		onClick={() => props.onClick(index)}
		onChange={event => props.onChange(event, index)}
	/>
)) : null;

export default Users;
