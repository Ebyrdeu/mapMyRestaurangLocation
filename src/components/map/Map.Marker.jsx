import {Marker, useMapEvents} from "react-leaflet";
import {MapCustomPopup} from "./Map.CustomPopup.jsx";
import {useCollection} from "../../hooks/useCollection.js";
import {useContext, useEffect} from "react";
import {MapContext} from "../../context/MapContext.jsx";

export const MapMarker = () => {
	// Hooks
	const {data} = useCollection('locations');

	// render
	return data.map((item) => <Marker
		key={item.id}
		position={[item.coordinates._lat, item.coordinates._long]}
		children={<MapCustomPopup data={item}/>}/>);
};

