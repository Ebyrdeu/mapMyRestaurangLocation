import {ActionIcon, Button, Group, ScrollArea, Table, Text} from "@mantine/core";
import {useCollection} from "../../hooks/useCollection.js";
import {IconPencil, IconThumbUp, IconTrash} from "@tabler/icons";
import {useFirestore} from "../../hooks/useFirestore.js";
import {useState} from "react";
import {ModalChangeWindow} from "./ModalChangeWindow.jsx";
import {Content} from "./Contet.jsx";

export const AdminTable = () => {

	// Hooks
	const {data: locationData} = useCollection('locations');
	const {data: requestedData} = useCollection('userLocationRequest');
	const {data: usersData} = useCollection('users');
	const {deleteNewLocationForRestaurant, addNewLocationForRestaurant} = useFirestore();
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
			<ActionIcon color="green"
			            onClick={() => deleteNewLocationForRestaurant(id, 'userLocationRequest') && addNewLocationForRestaurant(title, city, desc, coordinates, createdBy, 'locations')}>
				<IconThumbUp size={16} stroke={1.5}/>
			</ActionIcon>
			<ActionIcon color="red" onClick={() => deleteNewLocationForRestaurant(id, 'userLocationRequest')}>
				<IconTrash size={16} stroke={1.5}/>
			</ActionIcon>
		</Content>));


	// Render Users Data
	const renderUsersData = usersData.map(({email, displayName, password, id}) => (<tr key={id}>
			<td >
				<Group spacing="sm">
					<div>
						<Text size="sm" weight={500}>{displayName}</Text>
						<Text color="dimmed" size="xs">{id}</Text>
					</div>
				</Group>
			</td>
			<td>{email}</td>
			<td>{password}</td>
		</tr>));

	// Render
	return (<>
		{show ? <ModalChangeWindow passId={passId} setShow={setShow}/> : (<ScrollArea sx={{width: '100vw', height: '100vh'}}>
			<Button.Group sx={{margin: '20px 20px', display: 'block'}}>
				<Button variant="default" onClick={() => setDisplayData('all')}>Accepted</Button>
				<Button variant="default" onClick={() => setDisplayData('requested')}>Requested</Button>
				<Button variant="default" onClick={() => setDisplayData('users')}>Users</Button>
			</Button.Group>

			{displayData === 'all' || displayData === 'requested' ? <Table verticalSpacing="sm">
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
			</Table> : <Table verticalSpacing="sm">
				<thead>
				<tr>
					<th>Username</th>
					<th>Email</th>
					<th>Password</th>
					<th/>
				</tr>
				</thead>
				<tbody>{renderUsersData}</tbody>
			</Table>}
		</ScrollArea>)}

	</>);
};

