import {Button, Container, Group, Text} from '@mantine/core';
import {Link} from "react-router-dom";
import {useStylesStartPage} from "../styles/StartPage.styles.js";


export const StartPage = () => {
	// Hooks
	const {classes} = useStylesStartPage(undefined, undefined);

	// Render
	return (<div className={classes.wrapper}>
			<Container size={700} className={classes.inner}>
				<h1 className={classes.title}>
					A{' '}
					<Text component="span" variant="gradient" gradient={{from: 'blue', to: 'cyan'}} inherit>
						Best
					</Text>{' '}
					Place to Search for Restaurant
				</h1>

				<Text className={classes.description} color="dimmed">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi dolore eius eligendi enim impedit incidunt molestias mollitia quo
					reiciendis!
				</Text>

				<Group className={classes.controls}>
					<Link to={'auth/signup'}>
						<Button
							size="xl"
							className={classes.control}
							variant="gradient"
							gradient={{from: 'blue', to: 'cyan'}}>
							Sign Up
						</Button>
					</Link>

					<Link to={'auth/login'}>
						<Button
							size="xl"
							variant="default"
							className={classes.control}>
							Login
						</Button>
					</Link>
				</Group>
			</Container>
		</div>);
};

