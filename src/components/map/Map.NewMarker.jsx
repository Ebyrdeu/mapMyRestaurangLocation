import {Marker, Popup, useMapEvents} from "react-leaflet";
import {useContext, useState} from "react";
import {MapContext} from "../../context/MapContext.jsx";
import {Button} from "@mantine/core";
import {IconPlus} from "@tabler/icons";
import {ModalContext} from "../../context/ModaContext.jsx";

export const MapNewMarker = () => {

	const {homeStatus, markerStatus} = useContext(MapContext);
	const {addModalData, dispatch} = useContext(ModalContext);

	const [newMarkerCoordinates, setNewMarkerCoordinates] = useState(null);
	const [homeCoordinates, setHomeCoordinates] = useState(null);

	const map = useMapEvents(homeStatus ? {
		click() {
			map.locate();
		}, locationfound(e) {
			setHomeCoordinates(e.latlng);

			map.flyTo(e.latlng, map.getZoom());
		},
	} : null);

	useMapEvents(markerStatus ? {
		click(e) {
			return setNewMarkerCoordinates([e.latlng.lat, e.latlng.lng]);
		},
	} : null); // Set Marker


	const ModalToData = () => {
		dispatch({type: 'ADD_MODAL_DATA', payload:  newMarkerCoordinates})
		dispatch({type: 'ADD_MODAL_STATUS', payload: true})
	}


	return (<>
		{newMarkerCoordinates === null ? null : <Marker position={newMarkerCoordinates}>
			<Popup>
				<Button compact rightIcon={<IconPlus size={14}/>} onClick={ModalToData}
				        variant="default">Create</Button>
			</Popup>
		</Marker>}

		{homeCoordinates === null ? null : <Marker position={homeCoordinates}>
			<Popup>
				You are Here
			</Popup>
		</Marker>}
	</>);
};

