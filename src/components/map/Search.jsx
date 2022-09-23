import {Autocomplete, Button, Group, Text} from '@mantine/core';
import {mapSearchStyles} from "../../styles/mapSearch.styles.js";
import {useCollection} from "../../hooks/useCollection.js";
import {forwardRef, useState} from "react";

const AutoCompleteItem = forwardRef(
	({description, value, geolocation,  ...others}, ref) => (
		<div ref={ref} {...others}>
			<Group noWrap>
				<div>
					<Text>{value}</Text>
					<Text size="xs" color="dimmed">
						{description}
					</Text>
					<Text size="xs" color="dimmed">
						{geolocation._lat}°E 	{geolocation._long}°N
					</Text>
				</div>
			</Group>
		</div>
	)
);

export const Search = () => {
	// Hooks
	const {classes} = mapSearchStyles();
	const {data} = useCollection('locations');

	// State
	const [completeValue, setCompleteValue] = useState('');

	// Render data for search bar
	const mapedData = data.map((item) => ({...item, value: item.title, group: item.city, description: item.desc, geolocation: item.coordinates}));

	return (
		<div className={classes.box}>
			<Autocomplete
				className={classes.search}
				itemComponent={AutoCompleteItem}
				data={mapedData}
				value={completeValue}
				onChange={setCompleteValue}
			/>
			<Button children={'Search'} className={classes.btn}/>
		</div>
	);
};


