import {userFirestore} from "../../hooks/userFirestore.js";
import {useState} from "react";
import {GeoPoint} from "firebase/firestore";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import {Button, Paper, TextInput} from "@mantine/core";

export const LocationFinder = () => {

	// Hooks
	const {addNewLocationForRestaurant} = userFirestore();

	// State
	const [geoLoc, setGeoLoc] = useState([0, 0]);
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [city, setCity] = useState('');


	// Coordinates
	const data = new GeoPoint(geoLoc[0], geoLoc[1]);


	// Set Coordinates
	useMapEvents({
		click(e) {
			return setGeoLoc([e.latlng.lat, e.latlng.lng]);
		},
	});

// Add new Location on Submit
	const submit = () => addNewLocationForRestaurant(name, city, desc, data);

// Render
	return (
		<div>
			<Marker position={geoLoc}>
				<Popup style={{display: 'none !important'}}>
					<Paper p={30} radius="sm">
						<TextInput label="Name" placeholder="Bluh bluh Restaraunt" required
						           onChange={(e) => setName(e.target.value)}/>
						<TextInput label="Description" placeholder="best int ehte best..." required
						           onChange={(e) => setDesc(e.target.value)}/>
						<TextInput label="City" placeholder="Malmö" required
						           onChange={(e) => setCity(e.target.value)}/>
						<Button fullWidth mt="xl" onClick={submit}>
							Add new Restaurant
						</Button>
					</Paper>
				</Popup>
			</Marker>
		</div>
	);
};