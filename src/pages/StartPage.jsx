import { createStyles, Container, Text, Button, Group } from '@mantine/core';
import {Link} from "react-router-dom";

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		boxSizing: 'border-box',
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

export const StartPage = () => {
	const { classes } = useStyles(undefined, undefined);
	return (
		<div className={classes.wrapper}>
			<Container size={700} className={classes.inner}>
				<h1 className={classes.title}>
					A{' '}
					<Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
						Best
					</Text>{' '}
					Place to Search for  Restaurant
				</h1>

				<Text className={classes.description} color="dimmed">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi dolore eius eligendi enim impedit incidunt molestias mollitia quo reiciendis!
				</Text>

				<Group className={classes.controls}>
				<Link to={'/signup'}>
					<Button
						size="xl"
						className={classes.control}
						variant="gradient"
						gradient={{ from: 'blue', to: 'cyan' }}>
						Sign Up
					</Button>
				</Link>

					<Link to={'/signup'}>
					<Button
						component="a"
						href="https://github.com/mantinedev/mantine"
						size="xl"
						variant="default"
						className={classes.control}>
						Login
					</Button>
					</Link>
				</Group>
			</Container>
		</div>
	);
};

