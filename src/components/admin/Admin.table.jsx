import {useCollection} from "../../hooks/useCollection.js";
import {Table} from '@mantine/core';
import {AdminContentLocations} from "./Admin.content.locations.jsx";
import {AdminContentUserList} from "./Admin.content.userList.jsx";

export const AdminTable = ({changePreview}) => {

	// Hooks
	const {data: locationData, isLoading: locationLoading} = useCollection('locations');
	const {data: requestedData, isLoading: requestLoading} = useCollection('userLocationRequest');
	const {data: userData, isLoading: userLoading} = useCollection('users');

	// All Table
	const allRestaurantsTable = changePreview === 1 && (<>
		<thead>
		<tr>
			<th children={'Restaurant Name'}/>
			<th children={'Coordinates'}/>
			<th children={'Description'}/>
			<th children={'City'}/>
			<th children={'Created By'}/>
			<th/>
		</tr>
		</thead>
		<AdminContentLocations  data={locationData} loading={locationLoading}/>
	</>);

	// Request Table
	const requestedRestaurantsTable = changePreview === 2 && (<>
		<thead>
		<tr>
			<th children={'Restaurant Name'}/>
			<th children={'Coordinates'}/>
			<th children={'Description'}/>
			<th children={'City'}/>
			<th children={'Created By'}/>
			<th/>
		</tr>
		</thead>
		<AdminContentLocations data={requestedData} loading={requestLoading}/>
	</>);

	// User Table
	const userList = changePreview === 3 && (<>
		<thead>
		<tr>
			<th children={'UserName'}/>
			<th children={'Email'}/>
		</tr>
		</thead>
		<AdminContentUserList data={userData} loading={userLoading}/>
	</>);


	// Render
	return (
		<Table sx={{width: 'calc(100vw - 80px)'}} verticalSpacing="xs">
			{allRestaurantsTable}
			{requestedRestaurantsTable}
			{userList}
		</Table>);
};

