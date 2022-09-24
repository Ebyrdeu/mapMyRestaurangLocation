import {MapContainer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {MapTileLayer} from "../components/map/Map.tileLayer.jsx";
import {MapButton} from "../components/map/Map.button";
import {MapSearch} from "../components/map/Map.Search.jsx";
import {MapContextProvider} from "../context/MapContext.jsx";
import {MapMarker} from "../components/map/Map.Marker";
import {SuperModal} from "../components/modal/SuperModal.jsx";

export const MapPage = () => {

	return (
		<MapContextProvider>
			<MapButton/>
			<MapSearch/>
			<SuperModal/>
			{/*Map*/}
			<MapContainer center={[55.608382, 13.010791]} zoom={13} style={{height: '100vh', width: 'calc(100vw - 80px)'}}>
				<MapTileLayer/>
				<MapMarker/>
			</MapContainer>
		</MapContextProvider>
	);
};

