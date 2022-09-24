import {Button} from '@mantine/core';
import {useMapSearchStyles} from "../../styles/Map.styles.js";
import {useContext} from "react";
import {MapContext} from "../../context/MapContext.jsx";

export const MapButton = () => {

	// Hooks
	const {classes} = useMapSearchStyles(undefined, undefined);

	const {markerStatus, homeStatus, dispatch} = useContext(MapContext);

	const onMarkerHandler = () => dispatch({type: 'MARKER_STATUS', payload: !markerStatus});

	const onHomeHandler = () => dispatch({type: 'HOME_STATUS', payload: !homeStatus});

	return (
		<Button.Group className={classes.group}>
			<Button variant="default" onClick={onMarkerHandler}>Marker {markerStatus ? 'On' : 'Off'} </Button>
			<Button variant="default" onClick={onHomeHandler}>Home {homeStatus ? 'On' : 'Off'}</Button>
		</Button.Group>
	);
};

