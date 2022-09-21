import {createContext, useEffect, useReducer} from "react";
import {authInitializer, authInitialState, authReducer} from "../reducer/auth.reducer.js";
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "../firebase/config.js";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
	// 3rd argument unnecessary cuz project is small
	//! Check reducer/auth.reducer.js for understanding how it works
	const [state, dispatch] = useReducer(authReducer, authInitialState, authInitializer);


	// simple save login on reload
	useEffect(() => {
		// Check auth.reducer.js for what its does
		const unsub = onAuthStateChanged(auth, user => dispatch({type: 'AUTH_IS_READY', payload: user}));
		return unsub;
	}, []);


	// Just to check data work correctly
	console.log("AuthContext state: ", state.user);


	// Render
	return <AuthContext.Provider value={{...state, dispatch}} children={children}/>;

};

