import {createStyles} from "@mantine/core";


// Styles
const BREAKPOINT = '@media (max-width: 755px)';

export const useStylesStartPage = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		boxSizing: 'border-box',
		height: '100vh',
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
	},

	inner: {
		position: 'relative',
		paddingTop: 200,
		paddingBottom: 120,

		[BREAKPOINT]: {
			paddingBottom: 80,
			paddingTop: 80,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 62,
		fontWeight: 900,
		lineHeight: 1.1,
		margin: 0,
		padding: 0,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,

		[BREAKPOINT]: {
			fontSize: 42,
			lineHeight: 1.2,
		},
	},

	description: {
		marginTop: theme.spacing.xl,
		fontSize: 24,

		[BREAKPOINT]: {
			fontSize: 18,
		},
	},

	controls: {
		marginTop: theme.spacing.xl * 2,

		[BREAKPOINT]: {
			marginTop: theme.spacing.xl,
		},
	},

	control: {
		height: 54,
		paddingLeft: 38,
		paddingRight: 38,

		[BREAKPOINT]: {
			height: 54,
			paddingLeft: 18,
			paddingRight: 18,
			flex: 1,
		},
	},
}));