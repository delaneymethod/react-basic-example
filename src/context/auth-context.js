import React from 'react';

const authContext = React.createContext({
	loggedIn: false,
	loginUser: () => {
	}
});

export default authContext;
