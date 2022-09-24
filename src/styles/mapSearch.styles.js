import {createStyles} from "@mantine/core";

export const mapSearchStyles = createStyles((theme) => ({
	search: {
		[theme.fn.smallerThan('xs')]: {
			display: 'none',
		},

	},
	box : {
		zIndex: 99999,
		position: 'absolute',
		right: '55px',
		top: '80px',
		display: "flex"
	},
	btn: {
		marginLeft: -10
	}
}));