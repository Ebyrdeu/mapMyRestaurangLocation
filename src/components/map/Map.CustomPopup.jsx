import {Popup} from "react-leaflet";
import {Button, Text} from '@mantine/core';
import {IconPencil, IconTrash} from "@tabler/icons";
import {useAuthContext} from "../../hooks/useAuthContext.js";
import {useFirestore} from "../../hooks/useFirestore.js";
import {useContext} from "react";
import {ModalContext} from "../../context/ModaContext.jsx";

export const MapCustomPopup = ({data}) => {

	// Hooks
	const {user} = useAuthContext();

	// Render
	const {title, desc, city, createdBy} = data;


	// Return
	return (<Popup>
		<Text size="lg" children={title}/>
		<Text size="md" children={city}/>
		<Text size="sm" color="dimmed" children={desc}/>
		<Button.Group mt="md">
			{user.uid === import.meta.env.VITE_ADMIN_ID || user.uid === createdBy ? (<CustomButtons data={data}/>) : null}
		</Button.Group>
	</Popup>);
};


const CustomButtons = ({data}) => {


	const {deleteNewLocationForRestaurant} = useFirestore();
	const {dispatch} = useContext(ModalContext);

	// Delete on Submit
	const submit = (id) => deleteNewLocationForRestaurant(id, 'locations');
	const onEdit = () => {
			dispatch({type: 'MODAL_STATUS', payload: true})
		dispatch({type: 'MODAL_DATA', payload: data})
	};
	// Render
	return (<>
		<Button compact leftIcon={<IconTrash size={14}/>} variant="default" onClick={() => submit(data.id)}>Delete</Button>
		<Button compact rightIcon={<IconPencil size={14}/>} variant="default" onClick={onEdit}>Edit</Button>
	</>);
};