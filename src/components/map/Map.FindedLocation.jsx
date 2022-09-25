import {useContext} from "react";
import {MapContext} from "../../context/MapContext.jsx";
import {Polyline, useMapEvents} from "react-leaflet";


export const MapFindedLocation = () => {
	const {mapOnSearchAction, homeStatus, dispatch, from, to} = useContext(MapContext);

	console.log(from);
	console.log(to);



	const map = useMapEvents({
		click: () => map.locate(),
		locationfound: () => {
			if (mapOnSearchAction === null) return;
			if (homeStatus === true) return;
			map.flyTo(mapOnSearchAction, 18);
			dispatch({type: 'MAP_ON_SEARCH_ACTION', payload: null});
			dispatch({type: 'TO', payload: mapOnSearchAction});
		},
	});



return <>
	{(from !== null && to !== null) ? <Polyline positions={[from, to]}/> : null }
</>

};


