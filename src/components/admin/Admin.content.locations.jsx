import {useFirestore} from "../../hooks/useFirestore.js";
import {ActionIcon, Badge, Group} from '@mantine/core';
import {IconPencil, IconThumbUp, IconTrash, } from '@tabler/icons';

export const AdminContentLocations = ({data, changePreview, setShowModal, dataForModal}) => {

	// Hooks
	const {addNewLocationForRestaurant, deleteNewLocationForRestaurant} = useFirestore();

	// Trash Button
	const onTrashButton = (id) => changePreview === 1 ? deleteNewLocationForRestaurant(id, 'locations') : deleteNewLocationForRestaurant(id, 'userLocationRequest');

	// Accept Button
	const onAcceptButton = (id, coordinates, title, desc, createdBy, city) => deleteNewLocationForRestaurant(id, 'userLocationRequest') && addNewLocationForRestaurant(title, city, desc, coordinates, createdBy, 'locations');

	// Render Location Data
	const renderLocationData = data.map(({coordinates, title, desc, id, createdBy, city}) => (<tr key={id}>
		<td>
			{title}
			<p style={{fontSize: '11px'}}>{id}</p>
		</td>
		<td>
			<Badge style={{display: 'block', width: 160, marginBottom: 5}} variant={'light'} children={`${coordinates._lat}° N`}/>
			<Badge style={{display: 'block', width: 160}} variant={'light'} children={`${coordinates._long}° E`}/>
		</td>
		<td children={desc}/>
		<td children={city}/>
		<td children={createdBy}/>

		{/*Actions*/}
		<td>
			<Group spacing={0} position="right">
				{changePreview === 1
					? <ActionIcon onClick={() => {
						dataForModal({id, coordinates, createdBy})
						setShowModal(true)
					}
					} children={<IconPencil size={18}/>}/>
					: <ActionIcon onClick={() => onAcceptButton()} children={<IconThumbUp size={18}/>}/>}
				<ActionIcon color="red" children={<IconTrash size={18} onClick={() => onTrashButton(id)}
				/>}/>
			</Group>
		</td>
	</tr>));


	// Render
	return  <tbody children={renderLocationData}/>;
};

