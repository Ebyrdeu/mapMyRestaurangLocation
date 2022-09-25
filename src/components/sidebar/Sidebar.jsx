import {Navbar} from '@mantine/core';
import {SideBarBottom} from "./SideBar.bottom";
import {SidebarTop} from "./Sidebar.top.jsx";

export const Sidebar = () => {

	// Render
	return (<Navbar height={'100vh'} width={{base: 80}} p="md" style={{zIndex: 9999}}>
			<SidebarTop/>
			<SideBarBottom/>
		</Navbar>);
};

