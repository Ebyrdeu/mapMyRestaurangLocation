import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import {LocationFinder} from "./LocationFinder.jsx";
import {MarkerPopup} from "./MarkerPopup.jsx";


// Map
export const Map = () => {
	// Render
	return (
		<div style={{width: '100%'}}>
			<MapContainer center={[55.608382, 13.010791]} zoom={13} style={{height: '100%', width: '100%'}}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

				{/*Popup*/}
				<MarkerPopup/>

				{/*Find Marker*/}
				<LocationFinder/>

			</MapContainer>
		</div>
	);
};


