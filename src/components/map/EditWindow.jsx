import {userFirestore} from "../../hooks/userFirestore.js";
import {useState} from "react";
import {GeoPoint} from "firebase/firestore";
import {Button, Paper, TextInput} from "@mantine/core";
import {useParams} from "react-router-dom";

export const EditWindow = ({id, lat, long, setShow,}) => {

	// Hooks
	const {updateNewLocationForRestaurant} = userFirestore();
	const {uid} = useParams();

	// State
	const [title, setTitle] = useState('test12');
	const [desc, setDesc] = useState('test12');
	const [city, setCity] = useState('test12');

	// Update Function
	const updateData = (id, start, end) => {
		setShow(false);
		return updateNewLocationForRestaurant(id, {
			title, city, desc, coordinates: new GeoPoint(start, end), createdBy: uid
		}, 'locations');
	};

	// Render
	return (<Paper p={30} mt={30} radius="md">
			<TextInput label="Name" placeholder="Bluh bluh Restaraunt" required
			           onChange={(e) => setTitle(e.target.value)}/>
			<TextInput style={{margin: '10px 0'}} label="Description" placeholder="best int ehte best..." required
			           onChange={(e) => setDesc(e.target.value)}/>
			<TextInput label="City" placeholder="Malmö" required
			           onChange={(e) => setCity(e.target.value)}/>
			<Button fullWidth mt="xl" onClick={() => updateData(id, lat, long)} children={'Change Data'}/>
			<Button fullWidth mt="xl" onClick={() => updateData(id, lat, long)} children={'Pleb Mode'}/>
		</Paper>

	);
};