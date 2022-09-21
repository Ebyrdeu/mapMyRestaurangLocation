import {useState} from "react";
import {useAuthContext} from "./useAuthContext.js";
import {auth} from "../firebase/config.js";
import {signInWithEmailAndPassword} from 'firebase/auth';

export const useSignIn = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const {dispatch} = useAuthContext();

	const signIn = (email, password) => {
		setError(null); // just default staff, we can use RQ later if you think its needed
		setIsLoading(true); // just default staff, we can use RQ later if you think its needed

		// Login
		signInWithEmailAndPassword(auth, email, password)
			.catch(err => setError(err.message))
			.finally(() => {
				// Dispatch new data to reduced state
				dispatch({type: 'SIGN_IN', payload: auth.currentUser});
				setIsLoading(false);
			});
	};

	return {
		signIn,
		error,
		isLoading};

};

