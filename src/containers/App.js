import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

import classes from './App.module.css';

import Aux from '../hoc/Aux/Aux';
import withClass from '../hoc/withClass';
import Users from '../components/Users/Users';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const app = props => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [users, setUsers] = useState([
		{ id: 'sean', name: 'Sean', age: 38 },
		{ id: 'ashley', name: 'Ashley', age: 36 },
		{ id: 'sionainn', name: 'Sionainn', age: 4 },
		{ id: 'saoirse', name: 'Saoirse', age: 2 }
	]);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [showUsers, setShowUsers] = useState(false);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [loggedIn, setLoggedIn] = useState(false);

	/**
	 * @param event
	 * @param userIndex
	 */
	const updateUser = (event, userIndex) => {
		const usersCopy = [...users];

		usersCopy[userIndex].name = event.target.value;

		setUsers(usersCopy);
	};

	/**
	 * @param userIndex
	 */
	const deleteUser = userIndex => {
		const usersCopy = [...users];

		usersCopy.splice(userIndex, 1);

		setUsers(usersCopy);
	};

	const toggleUsers = () => setShowUsers(!showUsers);

	const loginUser = () => setLoggedIn(!loggedIn);

	return (
		<Aux>
			<AuthContext.Provider value={{
				loggedIn,
				loginUser
			}}>
				<Cockpit
					appTitle={props.appTitle}
					showUsers={showUsers}
					toggleUsers={toggleUsers}
				/>
				<Users
					users={users}
					showUsers={showUsers}
					onClick={deleteUser}
					onChange={updateUser}
				/>
			</AuthContext.Provider>
		</Aux>
	);
};

app.defaultProps = {
	appTitle: ''
};

app.propTypes = {
	appTitle: PropTypes.string.isRequired
};

export default withClass(app, classes.app);
