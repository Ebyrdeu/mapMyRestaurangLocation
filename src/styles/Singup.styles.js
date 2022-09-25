import {createStyles} from "@mantine/core";

export const useSignUpStyles = createStyles((theme) => ({
	wrapper: {
		backgroundSize: 'cover', backgroundImage: `url(https://wallpaperaccess.com/full/2641099.gif)`, backgroundPosition: '25% 75%'
	},

	form: {
		borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]}`,
		minHeight: '100vh',
		maxWidth: 450,
		paddingTop: 80,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			maxWidth: '100%',
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black, fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	logo: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black, width: 120, display: 'block', marginLeft: 'auto', marginRight: 'auto',
	},

	control: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 1000,
		paddingLeft: theme.spacing.sm,
		paddingRight: 4,
		width: 136,
		height: 36,
	},

	iconWrapper: {
		height: 28,
		width: 28,
		borderRadius: 28,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[4],
		color: theme.colorScheme === 'dark' ? theme.black : theme.colors.blue[2],
	},

	value: {
		lineHeight: 1,
	}, singNotification: {
		position: 'absolute', top: '10px', right: '10px'
	}
}));