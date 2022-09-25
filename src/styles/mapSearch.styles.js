import {createStyles} from "@mantine/core";

export const mapSearchStyles = createStyles((theme) => ({
	search: {
		marginRight: 5, [theme.fn.smallerThan('xs')]: {
			display: 'none',
		},

	}, box: {
		zIndex: 99999, position: 'absolute', right: '40px', top: '80px', display: "flex", alignItems: 'center'
	},

}));