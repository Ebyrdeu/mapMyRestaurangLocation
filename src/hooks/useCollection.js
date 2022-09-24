import {useEffect, useState} from 'react';
import {collection, onSnapshot, query} from 'firebase/firestore';
import {db} from '../firebase/config.js';


export const useCollection = (locationCollection, ) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true)
		const unsubscribe = onSnapshot(query(collection(db, locationCollection)), (snapshot) => {
			const docs = snapshot.docs.map(doc => {
				return {id: doc.id, ...doc.data()};
			});

			 setData(docs);
			 setIsLoading(false)
		});

		return () => unsubscribe();
	}, []);

	return {
		data,
		isLoading
	};
};
