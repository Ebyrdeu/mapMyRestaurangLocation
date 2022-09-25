import {Tabs} from '@mantine/core';
import {IconList, IconSquarePlus, IconUsers} from '@tabler/icons';

export const AdminButton = ({setChangePreview}) => {
	return (
		<Tabs defaultValue="first" style={{marginBottom: 40, marginTop: 40}}>
			<Tabs.List position="center">
				<Tabs.Tab icon={<IconList/>} value="first" onClick={() => setChangePreview(1)} children={'Accepted Locations'}/>
				<Tabs.Tab icon={<IconSquarePlus/>} value="second" onClick={() => setChangePreview(2)} children={'Requested Locations'}/>
				<Tabs.Tab icon={<IconUsers/>} value="third" onClick={() => setChangePreview(3)} children={'User List'}/>
			</Tabs.List>
		</Tabs>
	);
};

