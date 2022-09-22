import {useState} from 'react';
import {ActionIcon, Avatar, Center, Group, Navbar, Stack, Tooltip, UnstyledButton, useMantineColorScheme} from '@mantine/core';
import {IconHome2, IconLogout, IconMap2, IconMoonStars, IconSettings, IconSun} from '@tabler/icons';
import {useStylesDashboardPage} from "../styles/DashboardPage.styles.js";
import {useLogout} from "../hooks/useLogout.js";
import {Link, useParams} from "react-router-dom";

function NavbarLink({icon: Icon, label, active, onClick, link}) {
	const {classes, cx} = useStylesDashboardPage(undefined, undefined);
	return (
		<Link to={link}>
			<Tooltip label={label} position="right" transitionDuration={0}>
				<UnstyledButton onClick={onClick} className={cx(classes.link, {[classes.active]: active})}>
					<Icon stroke={1.5}/>
				</UnstyledButton>
			</Tooltip>
		</Link>
	);
}

export const Sidebar = () => {
	const {uid, type} = useParams();
	const {colorScheme, toggleColorScheme} = useMantineColorScheme();
	const {logout} = useLogout();


	const [active, setActive] = useState(type);

	const [mockdata, setMockdata] = useState([
		{icon: IconHome2, label: 'Home', linkToPage: `/dashboard/${uid}/home`, action: 'home'},
		{icon: IconMap2, label: 'Map', linkToPage: `/dashboard/${uid}/map`, action: 'map'},
		{icon: IconSettings, label: 'Settings', linkToPage: `/dashboard/${uid}/settings`, action: 'settings'},
	]);

	const links = mockdata.map((link) => (
		<NavbarLink
			{...link}
			key={link.label}
			link={link.linkToPage}
			active={link.action === active}
			onClick={() => setActive(link.action)}
		/>
	));

	return (
		<Navbar height={'100vh'} width={{base: 80}} p="md" style={{zIndex: 99990000}}>
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
								backgroundColor:
									theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
								color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
							})}
						>
							{colorScheme === 'dark' ? <IconSun size={24}/> : <IconMoonStars size={24}/>}
						</ActionIcon>
					</Group>
					<NavbarLink icon={IconLogout} label="Logout" onClick={logout}/>
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
};

