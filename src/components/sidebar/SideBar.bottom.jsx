import {ActionIcon, Group, Navbar, Stack, useMantineColorScheme} from "@mantine/core";
import {IconLogout, IconMoonStars, IconSun} from "@tabler/icons";
import {SideBarLinks} from "./SideBar.links.jsx";
import {useLogout} from "../../hooks/useLogout.js";

export const SideBarBottom = () => {

	const {colorScheme, toggleColorScheme} = useMantineColorScheme();
	const {logout} = useLogout();

	const themeChanger = (theme) => ({
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
	});

	return (<Navbar.Section>
			<Stack justify="center" spacing={0}>
				<Group position="center" my="xl">
					<ActionIcon onClick={() => toggleColorScheme()} size="lg" sx={themeChanger}
					            children={colorScheme === 'dark' ? <IconSun size={24}/> : <IconMoonStars size={24}/>}/>
				</Group>
				<SideBarLinks icon={IconLogout} label="Logout" onClick={logout}/>
			</Stack>
		</Navbar.Section>);
};

