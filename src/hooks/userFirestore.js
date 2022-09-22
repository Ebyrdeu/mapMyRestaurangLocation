import {useState} from "react";
import {db} from '../firebase/config.js';
import {addDoc, collection, deleteDoc, doc} from "firebase/firestore";

export const userFirestore = () => {

	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const addNewLocationForRestaurang = (title, city, desc, coordinates) => {
		setIsLoading(true);
		return addDoc(collection(db, 'locations'), {title, city, desc, coordinates})
			.then(() => setIsLoading(false))
			.catch(e => setError(e.message));
	};

	const deleteNewLocationForRestaurang = (id) => {
		setIsLoading(true);
		return deleteDoc(doc(db, 'locations', id))
			.then(() => setIsLoading(false))
			.catch(e => setError(e.message));
	};


	return {
		addNewLocationForRestaurang,
		deleteNewLocationForRestaurang,
		isLoading,
		error
	};
};

