import {useEffect, useState} from 'react';
import {collection, onSnapshot, query} from 'firebase/firestore';
import {db} from '../firebase/config.js';


export const useCollection = (locationCollection) => {
	const [data, setData] = useState([]);

	useEffect(() => {

		const unsubscribe = onSnapshot(query(collection(db, locationCollection)), (snapshot) => {
			const docs = snapshot.docs.map(doc => {
				return {id: doc.id, ...doc.data()};
			});

			return setData(docs);
		});

		return  () => unsubscribe();
	}, [locationCollection]);

	return {
		data,
	};
};
