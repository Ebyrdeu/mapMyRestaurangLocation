import {useState} from "react";
import {db} from '../firebase/config.js';
import {addDoc, collection, deleteDoc, doc, setDoc} from "firebase/firestore";

export const userFirestore = () => {

	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	// Only For Admin
	const addNewLocationForRestaurant = (title, city, desc, coordinates, createdBy, place) => {
		setIsLoading(true);

		return addDoc(collection(db, place), {title, city, desc, coordinates, createdBy})
			.then(() => setIsLoading(false))
			.catch(e => setError(e.message));
	};



	// For Admin and User
	const deleteNewLocationForRestaurant = (id, place) => {
		setIsLoading(true);
		return deleteDoc(doc(db, place, id))
			.then(() => setIsLoading(false))
			.catch(e => setError(e.message));
	};

	const updateNewLocationForRestaurant = (id, data, place) => {
		setIsLoading(true);
		return setDoc(doc(db, place, id), data)
			.then(() => setIsLoading(false))
			.catch(e => setError(e.message));
	};


	return {
		addNewLocationForRestaurant,
		deleteNewLocationForRestaurant,
		updateNewLocationForRestaurant,
		isLoading, error
	};
};

