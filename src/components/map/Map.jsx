import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import {LocationFinder} from "./LocationFinder.jsx";
import {MarkerPopup} from "./MarkerPopup.jsx";
import {Search} from "./Search.jsx";


// Map
export const Map = () => {

	// Render
	return (
		<>
			<Search/>
			<MapContainer center={[55.608382, 13.010791]} zoom={13} style={{height: '100vh', width: 'calc(100vw - 80px)', overflowY: 'hidden'}}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

				<MarkerPopup/>
				<LocationFinder/>
			</MapContainer>
		</>
	);
};

