import {Button, Modal, Textarea, TextInput} from '@mantine/core';
import {useContext, useState} from "react";
import {GeoPoint} from "firebase/firestore";
import {useFirestore} from "../../hooks/useFirestore.js";
import {ModalContext} from "../../context/ModaContext.jsx";

export const EditModal = () => {


	// Hooks
	const {modalStatus, modalData, dispatch} = useContext(ModalContext);
	const {updateNewLocationForRestaurant} = useFirestore();

	// State
	const [title, setTitle] = useState('test12');
	const [desc, setDesc] = useState('test12');
	const [city, setCity] = useState('test12');

	// props
const {id, coordinates, createdBy} =	modalData
	const handleSaveChanges = () => {
		dispatch({type: 'MODAL_STATUS', payload: false})
		return updateNewLocationForRestaurant(id, {
			title, city, desc, coordinates: new GeoPoint(coordinates._lat, coordinates._long), createdBy
		}, 'locations');
	};

	return (
		<Modal zIndex={999999999} opened={modalStatus} title="ChangeData" onClose={() => dispatch({type: 'MODAL_STATUS', payload: false})}>
			<TextInput label="Restaurant Name" placeholder="Fraus ol` de buar" required onChange={e => setTitle(e.target.value)}/>
			<TextInput mt={10} mb={10} label="City" placeholder="you@mantine.dev" required onChange={e => setCity(e.target.value)}/>
			<Textarea label="Description" placeholder="Lorem Ipsum" required onChange={e => setDesc(e.target.value)}/>
			<Button fullWidth mt="xl" children={'Save Changes'} onClick={handleSaveChanges}/>
		</Modal>
	);
};

