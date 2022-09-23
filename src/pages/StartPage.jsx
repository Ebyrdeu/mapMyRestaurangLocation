import {Button, Container, Group, Text} from '@mantine/core';
import {Link} from "react-router-dom";
import {useStylesStartPage} from "../styles/StartPage.styles.js";
import {useAuthContext} from "../hooks/useAuthContext.js";


export const StartPage = () => {
	// Hooks
	const {classes} = useStylesStartPage(undefined, undefined);
	const {user} = useAuthContext();

	// Render
	return (<div className={classes.wrapper}>
		<Container size={700} className={classes.inner}>
			<h1 className={classes.title}>
				A{' '}
				<Text component="span" variant="gradient" gradient={{from: 'blue', to: 'cyan'}} inherit children={'Best'}/>
				{' '}
				Place to Search for Restaurant
			</h1>

			<Text className={classes.description} color="dimmed" children={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi' +
				' dolore eius eligendi enim impedit incidunt molestias mollitia quo treiciendis!'}/>

			<Group className={classes.controls}>
				{user
					? (<Link to={`/dashboard/${user.uid}/map`}
					         children={<Button size="xl"
					                           variant="gradient"
					                           className={classes.control}
					                           gradient={{from: 'blue', to: 'cyan'}}
					                           children={'To Dashboard'}/>}/>)
					: (<>
						<Link to={'auth/signup'}
						      children={<Button size="xl"
						                        className={classes.control}
						                        variant="gradient"
						                        gradient={{from: 'blue', to: 'cyan'}}
						                        children={'Sign Up'}/>}/>
						<Link to={'auth/login'}
						      children={<Button size="xl"
						                        variant="default"
						                        className={classes.control}
						                        children={'Login'}/>}/>
					</>)
				}
			</Group>
		</Container>
	</div>);
};

