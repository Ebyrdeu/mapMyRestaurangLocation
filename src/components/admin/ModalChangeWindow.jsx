import {useParams} from "react-router-dom";
import {useFirestore} from "../../hooks/useFirestore.js";
import {useState} from "react";
import {GeoPoint} from "firebase/firestore";
import {Button, Container, Paper, TextInput} from "@mantine/core";

export const ModalChangeWindow = ({passId, setShow}) => {

	// Hooks
	const {uid} = useParams();
	const {updateNewLocationForRestaurant} = useFirestore();

	// Props
	const {id, coordinates} = passId;

	// States
	const [title, setTitle] = useState('test12');
	const [desc, setDesc] = useState('test12');
	const [city, setCity] = useState('test12');

	// Update Function
	const updateNewData = () => {
		setShow(false);
		return updateNewLocationForRestaurant(id, {title, city, desc, coordinates: new GeoPoint(coordinates._lat, coordinates._long), createdBy: uid
		}, 'locations')
	};

	// Render
	return (<Container size={420} my={40}>
		<Paper withBorder shadow="md" p={30} mt={30} radius="md">
			<TextInput label="Title"
			           placeholder="you@mantine.dev"
			           required
			           onChange={e => setTitle(e.target.value)}/>

			<TextInput label="Description"
			           placeholder="you@mantine.dev"
			           required
			           onChange={e => setDesc(e.target.value)}/>

			<TextInput label="City"
			           placeholder="you@mantine.dev"
			           required
			           onChange={e => setCity(e.target.value)}/>

			<Button fullWidth mt="xl" onClick={updateNewData} children={'Update'}/>
			<Button fullWidth mt="xl" onClick={() => setShow(false)} children={'Go Back'}/>
		</Paper>
	</Container>);

};