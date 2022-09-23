import {ActionIcon, Badge, Button, Container, Group, Paper, ScrollArea, Table, Text, TextInput, useMantineTheme} from "@mantine/core";
import {useCollection} from "../../hooks/useCollection.js";
import {IconPencil, IconTrash} from "@tabler/icons";
import {userFirestore} from "../../hooks/userFirestore.js";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {GeoPoint} from "firebase/firestore";

export const AdminTable = () => {

	const theme = useMantineTheme();
	const {data} = useCollection('locations');
	const {deleteNewLocationForRestaurant} = userFirestore();

	const [show, setShow] = useState(false);
	const [passId, setPassId] = useState(null);
	const rows = data.map(({coordinates, title, desc, id, createdBy},) => (
		<tr key={id}>
			<td>
				<Group spacing="sm">
					<div>
						<Text size="sm" weight={500}>
							{title}
						</Text>
						<Text color="dimmed" size="xs">
							{id}
						</Text>
					</div>
				</Group>
			</td>

			<td>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<Badge style={{width: 160}}
					       variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}>
						{coordinates._lat}° N
					</Badge>
					<Badge
						style={{marginTop: 5, width: 160}}
						variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}>
						{coordinates._long}° E
					</Badge>
				</div>
			</td>
			<td>
				{desc}
			</td>
			<td>
				{createdBy}
			</td>
			<td>
				<Group spacing={0} position="right">
					<ActionIcon onClick={() => {
						setPassId({
							id,
							coordinates
						});
						setShow(true);
					}}>
						<IconPencil size={16} stroke={1.5}/>
					</ActionIcon>
					<ActionIcon color="red" onClick={() => deleteNewLocationForRestaurant(id)}>
						<IconTrash size={16} stroke={1.5}/>
					</ActionIcon>
				</Group>
			</td>
		</tr>
	));

	return (
		<>
			{show ? <ModalChangeWindow passId={passId} setShow={setShow}/> : (
				<ScrollArea sx={{width: '100vw', height: '100vh'}}>
					<Table verticalSpacing="sm">
						<thead>
						<tr>
							<th>Restaurant Name</th>
							<th>Coordinates</th>
							<th>Description</th>
							<th>Created/Updated By</th>
							<th/>
						</tr>
						</thead>
						<tbody>{rows}</tbody>
					</Table>
				</ScrollArea>
			)}

		</>
	);
};


const ModalChangeWindow = ({passId, setShow}) => {
	const {uid} = useParams();
	const {updateNewLocationForRestaurant} = userFirestore();
	const {id, coordinates} = passId
	console.log(coordinates);
	// States
	const [title, setTitle] = useState('test12');
	const [desc, setDesc] = useState('test12');
	const [city, setCity] = useState('test12');


	const updateNewData = () => {
		setShow(false)
		return updateNewLocationForRestaurant(id, {
			title,
			city,
			desc,
			coordinates: new GeoPoint(coordinates._lat, coordinates._long),
			createdBy: uid
		});
	}

	return (
		<Container size={420} my={40}>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<TextInput label="Title" placeholder="you@mantine.dev" required
				           onChange={e => setTitle(e.target.value)}/>
				<TextInput label="Description" placeholder="you@mantine.dev" required
				           onChange={e => setDesc(e.target.value)}/>
				<TextInput label="City" placeholder="you@mantine.dev" required
				           onChange={e => setCity(e.target.value)}/>
				<Button fullWidth mt="xl" onClick={updateNewData}>
				Update
				</Button>
				<Button fullWidth mt="xl" onClick={() => setShow(false)}>
					Go Back
				</Button>
			</Paper>
		</Container>
	);

};