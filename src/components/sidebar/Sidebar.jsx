import {useState} from 'react';
import {ActionIcon, Avatar, Center, Group, Navbar, Stack, useMantineColorScheme} from '@mantine/core';
import {IconGauge, IconHome2, IconLogout, IconMap2, IconMoonStars, IconSettings, IconSun} from '@tabler/icons';
import {useLogout} from "../../hooks/useLogout.js";
import {useParams} from "react-router-dom";
import {NavbarLink} from "./NavbarLink.jsx";


export const Sidebar = () => {

	// Hooks
	const {uid, type} = useParams();
	const {colorScheme, toggleColorScheme} = useMantineColorScheme();
	const {logout} = useLogout();

	// State
	const [active, setActive] = useState(type);

	//  Icon Links Data
	const iconData = [
		{icon: IconHome2, label: 'Home', linkToPage: `/dashboard/${uid}/home`, action: 'home'},
		{icon: IconMap2, label: 'Map', linkToPage: `/dashboard/${uid}/map`, action: 'map'},
		{icon: IconSettings, label: 'Settings', linkToPage: `/dashboard/${uid}/settings`, action: 'settings'},
		{icon: IconGauge, label: 'Admin Panel', linkToPage: `/dashboard/${uid}/admin`, action: import.meta.env.VITE_ADMIN_ID},
	];


	// Render Icons Links
	const links = iconData.map((link) => (<NavbarLink
		{...link}
		key={link.label}
		link={link.linkToPage}
		active={link.action === active}
		onClick={() => setActive(link.action)}
	/>));

	// Render
	return (<Navbar height={'100vh'} width={{base: 80}} p="md" style={{zIndex: 99990000}}>
		<Center>
			<Avatar variant="filled" radius="xl" size="lg"/>
		</Center>
		<Navbar.Section grow mt={50}>
			<Stack justify="center" spacing={0} children={links}/>
		</Navbar.Section>
		<Navbar.Section>
			<Stack justify="center" spacing={0}>
				<Group position="center" my="xl">
					<ActionIcon
						onClick={() => toggleColorScheme()}
						size="lg"
						sx={(theme) => ({
							backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
							color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
						})}
						children={colorScheme === 'dark' ? <IconSun size={24}/> : <IconMoonStars size={24}/>}/>
				</Group>
				<NavbarLink icon={IconLogout} label="Logout" onClick={logout}/>
			</Stack>
		</Navbar.Section>
	</Navbar>);
};

