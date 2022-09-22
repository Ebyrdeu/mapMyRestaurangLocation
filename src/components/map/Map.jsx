import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
import {Button, Container, Paper, TextInput,} from '@mantine/core';

import 'leaflet/dist/leaflet.css';
import {useState} from "react";
import {useCollection} from "../../hooks/useCollection.js";
import {userFirestore} from "../../hooks/userFirestore.js";
import {GeoPoint} from "firebase/firestore";


// Map
export const Map = () => {
	return (
		<div style={{width: '100%'}}>

			<MapContainer center={[55.608382, 13.010791]} zoom={13} style={{height: '100%', width: '100%'}}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MarkerPopup/>
				<LocationFinderDummy/>
			</MapContainer>
		</div>
	);
};



// Show Already existed Markers
const MarkerPopup = () => {
	const {data} = useCollection('locations');
const {deleteNewLocationForRestaurant} =	userFirestore()
	const submit = (id) => deleteNewLocationForRestaurant(id)

	return data.map(({coordinates, title, desc, id}, ) => {
		return (
			<Marker key={id} position={[coordinates._lat, coordinates._long]}>
				<Popup>
					<Paper  p={30} radius="sm">
						<h3>{desc}</h3>
						<Button fullWidth mt="xl" onClick={() => submit(id)}>
							Delete Restaurant
						</Button>
					</Paper>
				</Popup>
			</Marker>
		);
	});

};



// Set Own Marker
const LocationFinderDummy = () => {
	const [geoLoc, setGeoLoc] = useState([0, 0]);
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [city, setCity] = useState('');
	const {addNewLocationForRestaurant} = userFirestore()
	const data = new GeoPoint(geoLoc[0], geoLoc[1])


	useMapEvents({
		click(e) {
			console.log([e.latlng.lat, e.latlng.lng]);
			return setGeoLoc([e.latlng.lat, e.latlng.lng]);
		},
	});



	const submit = () => addNewLocationForRestaurant(name,city,desc,data);




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