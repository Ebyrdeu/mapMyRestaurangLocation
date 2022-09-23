import {useState} from "react";
import {db} from '../firebase/config.js';
import {addDoc, collection, deleteDoc, doc, setDoc} from "firebase/firestore";

export const useFirestore = () => {

	//  State
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	// Add Data
	const addNewLocationForRestaurant = (title, city, desc, coordinates, createdBy, locationName) => {
		setIsLoading(true);

		return addDoc(collection(db, locationName), {title, city, desc, coordinates, createdBy})
			.then(() => setIsLoading(false))
			.catch(e => setError(e.message));
	};


	// Add Data
	const addNewUser = (email, password, displayName, locationName) => {
		setIsLoading(true);

		return addDoc(collection(db, locationName), {email, password, displayName})
			.then(() => setIsLoading(false))
			.catch(e => setError(e.message));
	};

	// Mutate Data
	const deleteNewLocationForRestaurant = (id, locationName) => {
		setIsLoading(true);
		return deleteDoc(doc(db, locationName, id))
			.then(() => setIsLoading(false))
			.catch(e => setError(e.message));
	};

	const updateNewLocationForRestaurant = (id, data, locationName) => {
		setIsLoading(true);
		return setDoc(doc(db, locationName, id), data)
			.then(() => setIsLoading(false))
			.catch(e => setError(e.message));
	};


	return {
		addNewLocationForRestaurant,
		deleteNewLocationForRestaurant,
		updateNewLocationForRestaurant,
		addNewUser,
		isLoading, error
	};
};

