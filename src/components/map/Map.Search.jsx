import {Autocomplete, ActionIcon, Group, Text} from '@mantine/core';
import  {IconSearch} from "@tabler/icons";
import {mapSearchStyles} from "../../styles/mapSearch.styles.js";
import {useCollection} from "../../hooks/useCollection.js";
import {forwardRef, useState} from "react";

const AutoCompleteItem = forwardRef(
	({description, value, geolocation, ...others}, ref) => (
		<div ref={ref} {...others}>
			<Group noWrap>
				<div>
					<Text children={value}/>
					<Text size="xs" color="dimmed" children={description}/>
					<Text size="xs" color="dimmed" children={`${geolocation._lat}°E 	${geolocation._long}°N`}/>
				</div>
			</Group>
		</div>
	)
);


export const MapSearch = () => {
	// Hooks
	const {classes} = mapSearchStyles();
	const {data} = useCollection('locations');

	// State
	const [completeValue, setCompleteValue] = useState('');

	// Render data for search bar
	const mapedData = data.map((item) => ({value: item.title, group: item.city, description: item.desc, geolocation: item.coordinates}));

	return (
		<div className={classes.box}>
			<Autocomplete
				className={classes.search}
				itemComponent={AutoCompleteItem}
				data={mapedData}
				value={completeValue}
				onChange={setCompleteValue}
			/>
			<ActionIcon radius='xl' variant="filled" onClick={() => console.log(completeValue)} children={<IconSearch size={20} />}/>
		</div>
	);
};




