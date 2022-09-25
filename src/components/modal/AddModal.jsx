import {Button, Modal, Textarea, TextInput} from '@mantine/core';
import {useContext, useState} from "react";
import {GeoPoint} from "firebase/firestore";
import {useFirestore} from "../../hooks/useFirestore.js";
import {ModalContext} from "../../context/ModaContext.jsx";
import {useAuthContext} from "../../hooks/useAuthContext.js";

export const AddModal = () => {


	// Hooks
	const {addModalStatus,addModalData, dispatch} = useContext(ModalContext);
	const {addNewLocationForRestaurant, error} = useFirestore();
	const {user} = useAuthContext();

	// State
	const [title, setTitle] = useState('test12');
	const [desc, setDesc] = useState('test12');
	const [city, setCity] = useState('test12');


	const handleSaveChanges = () => {
		if (error) return;
		dispatch({type: 'ADD_MODAL_STATUS', payload: false});
		return addNewLocationForRestaurant(title, city, desc, new GeoPoint(addModalData[0], addModalData[1]), user.uid, user.uid === import.meta.env.VITE_ADMIN_ID ? 'locations' : 'requestedLocations');
	};

	return (<Modal zIndex={999999999}
	               opened={addModalStatus}
	               title={`${user.uid === import.meta.env.VITE_ADMIN_ID ? 'Add' : 'Request'} new Restaurant Spot`}
	               onClose={() => dispatch({type: 'ADD_MODAL_STATUS', payload: false})}>
		<TextInput label="Restaurant Name" placeholder="Fraus ol` de buar" required onChange={e => setTitle(e.target.value)}/>
		<TextInput mt={10} mb={10} label="City" placeholder="you@mantine.dev" required onChange={e => setCity(e.target.value)}/>
		<Textarea label="Description" placeholder="Lorem Ipsum" required onChange={e => setDesc(e.target.value)}/>
		<Button fullWidth mt="xl" children={`${user.uid === import.meta.env.VITE_ADMIN_ID ? 'Add' : 'Request'}`} onClick={handleSaveChanges}/>
	</Modal>);
};

