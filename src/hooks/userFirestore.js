import {useState} from "react";
import {db} from '../firebase/config.js';
import {addDoc, collection, deleteDoc, doc, setDoc} from "firebase/firestore";

export const userFirestore = () => {

	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const addNewLocationForRestaurant = (title, city, desc, coordinates) => {
		setIsLoading(true);

		return addDoc(collection(db, 'locations'), {title, city, desc, coordinates})
			.then(() => setIsLoading(false))
			.catch(e => setError(e.message));
	};

	const deleteNewLocationForRestaurant = (id) => {
		setIsLoading(true);
		return deleteDoc(doc(db, 'locations', id))
			.then(() => setIsLoading(false))
			.catch(e => setError(e.message));
	};

	const updateNewLocationForRestaurant = (id, data) => {
		setIsLoading(true);
		return setDoc(doc(db, 'locations', id), data)
			.then(() => setIsLoading(false))
			.catch(e => setError(e.message));
	};


	return {
		addNewLocationForRestaurant, deleteNewLocationForRestaurant, updateNewLocationForRestaurant, isLoading, error
	};
};

