import {Avatar, Center, Navbar, Stack} from "@mantine/core";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {IconGauge, IconMap2, IconSettings} from "@tabler/icons";
import {SideBarLinks} from "./SideBar.links.jsx";

export const SidebarTop = () => {

	// Hooks
	const {uid, type} = useParams();


	// State
	const [active, setActive] = useState(type);

	//  Icon Links Data
	const iconData = [{
		icon: IconGauge,
		label: 'Admin Panel',
		linkToPage: `/dashboard/${uid}/admin`,
		action: import.meta.env.VITE_ADMIN_ID
	}, {icon: IconMap2, label: 'Map', linkToPage: `/dashboard/${uid}/map`, action: 'map'}, {
		icon: IconSettings,
		label: 'Settings',
		linkToPage: `/dashboard/${uid}/settings`,
		action: 'settings'
	}];


	// Render Icons Links
	const links = iconData.map((link) => (<SideBarLinks
		{...link}
		key={link.label} link={link.linkToPage}
		active={link.action === active}
		onClick={() => setActive(link.action)}/>));

	return (<>
		<Center>
			<Avatar variant="filled" radius="xl" size="lg"/>
		</Center>
		<Navbar.Section grow mt={50}>
			<Stack justify="center" spacing={0} children={links}/>
		</Navbar.Section>
	</>);
};

