import {Button, Modal, Textarea, TextInput} from '@mantine/core';
import {useState} from "react";
import {GeoPoint} from "firebase/firestore";
import {useFirestore} from "../../hooks/useFirestore.js";

export const AdminModal = ({showModal, setShowModal, data}) => {

	// Hooks
	const {updateNewLocationForRestaurant} = useFirestore();

	// State
	const [title, setTitle] = useState('test12');
	const [desc, setDesc] = useState('test12');
	const [city, setCity] = useState('test12');

	// props
	const {id, coordinates, createdBy} = data;

	const handleSaveChanges = () => {
		setShowModal(false);
		return updateNewLocationForRestaurant(id, {
			title, city, desc, coordinates: new GeoPoint(coordinates._lat, coordinates._long), createdBy
		}, 'locations');
	};

	return (
		<Modal opened={showModal} title="ChangeData" onClose={() => setShowModal(false)}>
			<TextInput label="Restaurant Name" placeholder="Fraus ol` de buar" required onChange={e => setTitle(e.target.value)}/>
			<TextInput mt={10} mb={10} label="City" placeholder="you@mantine.dev" required onChange={e => setCity(e.target.value)}/>
			<Textarea label="Description" placeholder="Lorem Ipsum" required onChange={e => setDesc(e.target.value)}/>
			<Button fullWidth mt="xl" children={'Save Changes'} onClick={handleSaveChanges}/>
		</Modal>
	);
};

