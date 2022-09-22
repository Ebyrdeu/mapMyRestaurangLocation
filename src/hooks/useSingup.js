import {useAuthContext} from "./useAuthContext.js";
import {useState} from "react";
import {auth} from "../firebase/config.js";
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';


export const useSignup = () => {
	const [errorSingUp, setErrorSingUp] = useState(null); // just default staff, we can use RQ later if you think its needed
	const [isLoadingSingUp, setIsLoadingSingUp] = useState(false); // just default staff, we can use RQ later if you think its needed

	const {dispatch} = useAuthContext();

	const signup = (email, password, displayName) => {
		setErrorSingUp(null);
		setIsLoadingSingUp(true);

		// Create new User
		createUserWithEmailAndPassword(auth, email, password)
			// Add name to new User
			.then(() => updateProfile(auth.currentUser, {displayName}))
			.catch(err => {
				setErrorSingUp(err.message);
				setIsLoadingSingUp(false);
			})
			.finally(() => {
				// Dispatch new data to reduced state
				dispatch({type: 'SIGN_IN', payload: auth.currentUser});
				setIsLoadingSingUp(false);
			});
	};


	return {
		signup,
		errorSingUp,
		isLoadingSingUp
	};
};

