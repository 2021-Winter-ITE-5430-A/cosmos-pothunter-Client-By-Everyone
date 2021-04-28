//to give accesss error message to users.
//once login, to redirect to another page
// to give access to certain page if the user is login 
// contest Api to store user aunthentication inforamtion

import React, { createContext } from 'react';

const AuthContext = createContext({ isLoggedIn: false });

export default AuthContext;