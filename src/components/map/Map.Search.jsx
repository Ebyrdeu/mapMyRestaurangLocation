import {ActionIcon, Autocomplete, Group, Text} from '@mantine/core';
import {IconSearch} from "@tabler/icons";
import {mapSearchStyles} from "../../styles/mapSearch.styles.js";
import {useCollection} from "../../hooks/useCollection.js";
import {forwardRef, useContext, useState} from "react";
import {MapContext} from "../../context/MapContext.jsx";

const AutoCompleteItem = forwardRef(({description, value, geolocation, ...others}, ref) => (<div ref={ref} {...others}>
		<Group noWrap>
			<div>
				<Text children={value}/>
				<Text size="xs" color="dimmed" children={description}/>
				<Text size="xs" color="dimmed" children={`${geolocation._lat}°E 	${geolocation._long}°N`}/>
			</div>
		</Group>
	</div>));


export const MapSearch = () => {
	// Hooks
	const {classes} = mapSearchStyles();
	const {data} = useCollection('locations');
	const {dispatch} = useContext(MapContext);
	// State
	const [completeValue, setCompleteValue] = useState('');
	// Render data for search bar
	const mapedData = data.map((item) => ({value: item.title, group: item.city, description: item.desc, geolocation: item.coordinates}));

	const onMatchedData = () => {
		return data.map(({coordinates, title}) => {
			if (title === completeValue) {
				dispatch({type: 'HOME_STATUS', payload: false})
				dispatch({type: 'MAP_ON_SEARCH_ACTION', payload: [coordinates._lat, coordinates._long]});
			}
		});
	};

	return (<div className={classes.box}>
			<Autocomplete
				className={classes.search}
				itemComponent={AutoCompleteItem}
				data={mapedData}
				value={completeValue}
				onChange={setCompleteValue}
			/>
			<ActionIcon radius="xl" variant="filled" onClick={onMatchedData} children={<IconSearch size={20}/>}/>
		</div>);
};




