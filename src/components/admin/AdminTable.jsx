import {ActionIcon, Button, ScrollArea, Table} from "@mantine/core";
import {useCollection} from "../../hooks/useCollection.js";
import {IconPencil, IconTrash, IconThumbUp} from "@tabler/icons";
import {userFirestore} from "../../hooks/userFirestore.js";
import {useState} from "react";
import {ModalChangeWindow} from "./ModalChangeWindow.jsx";
import {Content} from "./Contet.jsx";

export const AdminTable = () => {

	// Hooks
	const {data: locationData} = useCollection('locations');
	const {data: requestedData} = useCollection('userLocationRequest');
	const {deleteNewLocationForRestaurant, addNewLocationForRestaurant, error} = userFirestore();

	// States
	const [show, setShow] = useState(false);
	const [passId, setPassId] = useState(null);
	const [displayData, setDisplayData] = useState('all');


	// Render Location Data
	const renderLocationData = locationData.map(({coordinates, title, desc, id, createdBy, city}) => (
		<Content key={id} coordinates={coordinates} title={title} desc={desc} id={id} createdBy={createdBy} city={city}>
			<ActionIcon onClick={() => {
				setPassId({
					id, coordinates
				});
				setShow(true);
			}}>
				<IconPencil size={16} stroke={1.5}/>
			</ActionIcon>
			<ActionIcon color="red" onClick={() => deleteNewLocationForRestaurant(id, 'locations')}>
				<IconTrash size={16} stroke={1.5}/>
			</ActionIcon>
		</Content>));

	// Render Requested Data
	const renderRequestedData = requestedData.map(({coordinates, title, desc, id, createdBy, city}) => (
		<Content key={id} coordinates={coordinates} title={title} desc={desc} id={id} createdBy={createdBy} city={city}>

			<ActionIcon color="green" onClick={() => {
				addNewLocationForRestaurant(title, city, desc, coordinates, createdBy, 'locations');
				deleteNewLocationForRestaurant(id, 'userLocationRequest');
			}}>
				<IconThumbUp size={16} stroke={1.5}/>
			</ActionIcon>
			<ActionIcon color="red" onClick={() => deleteNewLocationForRestaurant(id, 'userLocationRequest')}>
				<IconTrash size={16} stroke={1.5}/>
			</ActionIcon>
		</Content>));

	// Render
	return (<>
		{error}
		{show ? <ModalChangeWindow passId={passId} setShow={setShow}/> : (<ScrollArea sx={{width: '100vw', height: '100vh'}}>
			<Button.Group sx={{margin: '0 auto', display: 'block'}}>
				<Button variant="default" onClick={() => setDisplayData('all')}>All</Button>
				<Button variant="default" onClick={() => setDisplayData('requested')}>Requested</Button>
			</Button.Group>
			<Table verticalSpacing="sm">
				<thead>
				<tr>
					<th>Restaurant Name</th>
					<th>Coordinates</th>
					<th>Description</th>
					<th>City</th>
					<th>Created/Updated By</th>
					<th/>
				</tr>
				</thead>
				<tbody>{displayData === 'all' ? renderLocationData : renderRequestedData}</tbody>

			</Table>
		</ScrollArea>)}

	</>);
};

