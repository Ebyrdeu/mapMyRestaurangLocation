import {useState} from "react";
import {useAuthContext} from "./useAuthContext.js";
import {auth} from "../firebase/config.js";
import {signInWithEmailAndPassword} from 'firebase/auth';

export const useSignIn = () => {
	const [errorSignIn, setErrorSignIn] = useState(null);
	const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);

	const {dispatch} = useAuthContext();

	const signIn = (email, password) => {
		setErrorSignIn(null); // just default staff, we can use RQ later if you think its needed
		setIsLoadingSignIn(true); // just default staff, we can use RQ later if you think its needed

		// Login
		signInWithEmailAndPassword(auth, email, password)
			.catch(err => setErrorSignIn(err.message))
			.finally(() => {
				// Dispatch new data to reduced state
				dispatch({type: 'SIGN_IN', payload: auth.currentUser});
				setIsLoadingSignIn(false);
			});
	};

	return {
		signIn, errorSignIn, isLoadingSignIn
	};

};

