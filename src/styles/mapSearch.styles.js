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
		left: '200px',
		top: '40px',
		display: "flex"
	},
	btn: {
		marginLeft: -10
	}
}));