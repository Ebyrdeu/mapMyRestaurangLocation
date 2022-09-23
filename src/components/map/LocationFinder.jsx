import {userFirestore} from "../../hooks/userFirestore.js";
import {useState} from "react";
import {GeoPoint} from "firebase/firestore";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import {Button, Paper, TextInput} from "@mantine/core";
import {useAuthContext} from "../../hooks/useAuthContext.js";
import {useParams} from "react-router-dom";

export const LocationFinder = () => {

	// Hooks
	const {addNewLocationForRestaurant, addNewRequestLocationForRestaurant, isLoading} = userFirestore();
	const {user} = useAuthContext();
	const {uid} = useParams();
	// State
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [city, setCity] = useState('');

	const [markerButton, setMarkerButton] = useState(false);
	const [markerButtonPosition, setMarkerButtonPosition] = useState(false);

	const [composition, setComposition] = useState(null);
	const [geoLoc, setGeoLoc] = useState(null);

	const [geoButton, setGeoButton] = useState(null);
	const [createMarker, setCreateMarker] = useState(null);

	// Maps Hooks
	useMapEvents(createMarker); // Set Marker
	const map = useMapEvents(geoButton); // Home Possiotion



// Add new Location on Submit
	const adminSubmit = () => {
		// Coordinates
		const data = new GeoPoint(geoLoc[0], geoLoc[1]);

		return addNewLocationForRestaurant(name, city, desc, data, user.uid, 'locations');
	};

	const userSubmit = () => {
		const data = new GeoPoint(geoLoc[0], geoLoc[1]);
		return addNewLocationForRestaurant(name, city, desc, data, user.uid, 'userLocationRequest')
	}


// Turn Off/ON Button
	const onTurnOffOn = () => {
		 setMarkerButton(!markerButton)
		markerButton ? setCreateMarker({
			click(e) {
				return setGeoLoc([e.latlng.lat, e.latlng.lng]);
			},
		}) : setCreateMarker(null);

	};


// Home Place Based on GeoPoisiton
	const onFindOwnPlace = () => {
		setMarkerButtonPosition(!markerButtonPosition)
		markerButtonPosition ? setGeoButton({
			click() {
				map.locate();
			}, locationfound(e) {
				setComposition(e.latlng);

				map.flyTo(e.latlng, map.getZoom());
			},
		}) : setMarkerButtonPosition(null)
	};

// Render
	return (<div>

			<Button.Group  style={{zIndex: 999, position: 'absolute', top: 10, right: 10, cursor: 'pointer'}} p={30} radius="sm">
				<Button variant="default" onClick={onTurnOffOn}>Marker {!markerButton ? 'ON' : 'OFF'}</Button>
				{uid === import.meta.env.VITE_ADMIN_ID ? (	<Button variant="default" onClick={onFindOwnPlace}>Home {!markerButtonPosition ? 'ON' : 'OFF'}</Button>	) : null}
			</Button.Group>


		{geoLoc === null ? null : (<Marker position={geoLoc}>
			<Popup style={{display: 'none !important'}}>
				<Paper p={30} radius="sm">
					<TextInput label="Name" placeholder="Bluh bluh Restaraunt" required
					           onChange={(e) => setName(e.target.value)}/>
					<TextInput label="Description" placeholder="best int ehte best..." required
					           onChange={(e) => setDesc(e.target.value)}/>
					<TextInput label="City" placeholder="Malmö" required
					           onChange={(e) => setCity(e.target.value)}/>
					<Button fullWidth mt="xl" onClick={uid === import.meta.env.VITE_ADMIN_ID ?  adminSubmit: userSubmit }>
						{	uid === import.meta.env.VITE_ADMIN_ID ? "Add new Restaurant" : 'Request new Restaurant Spot' }
					</Button>
				</Paper>
			</Popup>
		</Marker>)}

		{composition === null ? null : (<Marker position={composition}>
				<Popup>You are here</Popup>
			</Marker>)}
	</div>);
};