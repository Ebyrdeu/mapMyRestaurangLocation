import {signOut} from 'firebase/auth'
import {useState} from "react";
import {auth} from "../firebase/config.js";

export const useLogout = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const logout =  () => {
		setError(null)
		setIsLoading(true);
		signOut(auth).catch(e => setError(e)).finally(() => setIsLoading(false))

	}

	return {
		logout,
		error,
		isLoading
	}
};

