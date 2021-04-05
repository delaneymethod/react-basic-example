import React, {useState} from 'react';

import classes from './App.module.css';

import Users from '../components/Users/Users';
import Cockpit from '../components/Cockpit/Cockpit';

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const App = props => {
	const [users, setUsers] = useState([
		{id: 'sean', name: 'Sean', age: 38},
		{id: 'ashley', name: 'Ashley', age: 36},
		{id: 'sionainn', name: 'Sionainn', age: 4},
		{id: 'saoirse', name: 'Saoirse', age: 2}
	]);

	const [showUsers, setShowUsers] = useState(false);

	/**
	 * @param event
	 * @param userIndex
	 */
	const updateUser = (event, userIndex) => {
		const usersCopy = [...users];

		usersCopy[userIndex].name = event.target.value;

		setUsers(usersCopy);
	}

	/**
	 * @param userIndex
	 */
	const deleteUser = userIndex => {
		const usersCopy = [...users];

		usersCopy.splice(userIndex, 1);

		setUsers(usersCopy);
	}

	const toggleUsers = () => setShowUsers(!showUsers);

	return (
		<div className={classes.App}>
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
		</div>
	)
}

export default App;
