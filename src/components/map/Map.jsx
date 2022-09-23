import {MapContainer, Polyline, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import {LocationFinder} from "./LocationFinder.jsx";
import {MarkerPopup} from "./MarkerPopup.jsx";
import {useState} from "react";


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

				<PathFinder/>

			</MapContainer>
		</div>
	);
};


const PathFinder = () => {
	const [data, setData] = useState([
		{
			from_lat: "12.92415",
			from_long: "77.67229",
			id: "132512",
			to_lat: "12.92732",
			to_long: "77.63575",
		},
		{
			from_lat: "12.96691",
			from_long: "77.74935",
			id: "132513",
			to_lat: "12.92768",
			to_long: "77.62664",
		}
	])

	return (
		<div>
			{data.map(({id, from_lat, from_long, to_lat, to_long}) => {
				return <Polyline key={id} positions={[
					[from_lat, from_long], [to_lat, to_long],
				]} color={'red'} />
			})}
		</div>
	)
}