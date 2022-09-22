import {useAuthContext} from "./useAuthContext.js";
import {useState} from "react";
import {auth} from "../firebase/config.js";
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';


export const useSignup = () => {
	const [error, setError] = useState(null); // just default staff, we can use RQ later if you think its needed
	const [isLoading, setIsLoading] = useState(false); // just default staff, we can use RQ later if you think its needed

	const {dispatch} = useAuthContext();

	const signup = (email, password, displayName) => {
		setError(null);
		setIsLoading(true);

		// Create new User
		createUserWithEmailAndPassword(auth, email, password)
			// Add name to new User
			.then(() => updateProfile(auth.currentUser, {displayName}))
			.catch(err => {
				setError(err.message);
				setIsLoading(false);
			})
			.finally(() => {
				// Dispatch new data to reduced state
				dispatch({type: 'SIGN_IN', payload: auth.currentUser});
				setIsLoading(false);
			});
	};


	return {
		signup,
		error,
		isLoading
	};
};

