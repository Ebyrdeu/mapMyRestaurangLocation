import {useFirestore} from "../../hooks/useFirestore.js";
import {ActionIcon, Badge, Group} from '@mantine/core';
import {IconPencil, IconThumbUp, IconTrash, } from '@tabler/icons';
import {useContext} from "react";
import {ModalContext} from "../../context/ModaContext.jsx";

export const AdminContentLocations = ({data, changePreview}) => {


	// Hooks
	const {addNewLocationForRestaurant, deleteNewLocationForRestaurant} = useFirestore();
		const {dispatch} = useContext(ModalContext);
	// Trash Button
	const onTrashButton = (id) => changePreview === 1 ? deleteNewLocationForRestaurant(id, 'locations') : deleteNewLocationForRestaurant(id, 'requestedLocations');

	// Accept Button
	const onAcceptButton = (id, coordinates, title, desc, createdBy, city) => deleteNewLocationForRestaurant(id, 'requestedLocations') && addNewLocationForRestaurant(title, city, desc, coordinates, createdBy, 'locations');


	// Render Location Data
	const renderLocationData = data.map((item) => (<tr key={item.id}>
		<td>
			{item.title}
			<p style={{fontSize: '11px'}}>{item.id}</p>
		</td>
		<td>
			<Badge style={{display: 'block', width: 160, marginBottom: 5}} variant={'light'} children={`${item.coordinates._lat}° N`}/>
			<Badge style={{display: 'block', width: 160}} variant={'light'} children={`${item.coordinates._long}° E`}/>
		</td>
		<td children={item.desc}/>
		<td children={item.city}/>
		<td children={item.createdBy}/>

		{/*Actions*/}
		<td>
			<Group spacing={0} position="right">
				{changePreview === 1
					? <ActionIcon onClick={() => {
						dispatch({type: 'MODAL_DATA', payload: item})
						dispatch({type: 'MODAL_STATUS', payload: true})
					}
					} children={<IconPencil size={18}/>}/>
					: <ActionIcon onClick={() => onAcceptButton(item.id, item.coordinates, item.title, item.desc, item.createdBy, item.city)} children={<IconThumbUp size={18}/>}/>}
				<ActionIcon color="red" children={<IconTrash size={18} onClick={() => onTrashButton(item.id)}
				/>}/>
			</Group>
		</td>
	</tr>));


	// Render
	return  <tbody children={renderLocationData}/>;
};

