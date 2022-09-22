import {
	Box,
	Button,
	Center,
	Group,
	LoadingOverlay,
	Paper,
	PasswordInput,
	SegmentedControl,
	Text,
	TextInput,
	Title,
	useMantineColorScheme
} from '@mantine/core';
import {IconMoon, IconSun} from '@tabler/icons';
import {useSignUpStyles} from "../../styles/Singup.styles.js";
import {useSignup} from "../../hooks/useSingup.js";
import {useState} from "react";
import {useSignIn} from "../../hooks/useSignIn.js";
import {Link, useParams} from "react-router-dom";


export const SignForm = () => {
	// Router
	const {type} = useParams();

	// States
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, setDisplayName] = useState('');

	// Hooks
	const {classes} = useSignUpStyles(undefined, undefined);
	const {colorScheme, toggleColorScheme} = useMantineColorScheme();
	const {signup, isLoadingSingUp, errorSingUp} = useSignup();
	const {signIn, isLoadingSignIn, errorSignIn} = useSignIn();

	// Submit Functions
	const submitSingUp = () => signup(email, password, displayName);
	const submitSignIn = () => signIn(email, password);

	// 1 Sing Up
	// 2 Sing In
	return (
		<div className={classes.wrapper}>
			{type === 'signup'
				? <Paper className={classes.form} radius={0} p={30}>
					<Group position="center" my="xl">
						<SegmentedControl
							value={colorScheme}
							onChange={(value) => toggleColorScheme(value)}
							data={[{
								value: 'light', label: (
									<Center>
										<IconSun size={16} stroke={1.5}/>
										<Box ml={10}>Light</Box>
									</Center>
								),
							},
								{
									value: 'dark', label: (
										<Center>
											<IconMoon size={16} stroke={1.5}/>
											<Box ml={10}>Dark</Box>
										</Center>
									),
								},
							]}/>
					</Group>
					<Title order={2} className={classes.title} align="center" mt="md" mb={50} children={'My Restaurant Location'}/>
					<div style={{position: 'relative'}}>
						<LoadingOverlay visible={isLoadingSingUp} overlayBlur={2}/>
						<TextInput
							label="Username"
							placeholder="Bruce
					Wayne"
							size="md"
							onChange={(e) => setDisplayName(e.target.value)}/>
						<TextInput
							label="Email
					address"
							placeholder="hello@gmail.com"
							size="md"
							onChange={(e) => setEmail(e.target.value)}/>
						<PasswordInput label="Password"
						               placeholder="Your password"
						               mt="md"
						               size="md"
						               onChange={(e) => setPassword(e.target.value)}/>
						<Button onClick={submitSingUp} fullWidth mt="xl" size="md" children="Register"/>
						<Text align="center" mt="md">
							Have an account?{' '}
							<Link to={'/auth/login'} children={'Login'}/>
						</Text>
						{errorSingUp && <Text align="center" mt="md" children={errorSingUp}/>}
					</div>
				</Paper>
				: <Paper className={classes.form} radius={0} p={30}>
					<Group position="center" my="xl">
						<SegmentedControl
							value={colorScheme}
							onChange={(value) => toggleColorScheme(value)}
							data={[{
								value: 'light', label: (
									<Center>
										<IconSun size={16} stroke={1.5}/>
										<Box ml={10}>Light</Box>
									</Center>
								),
							},
								{
									value: 'dark', label: (
										<Center>
											<IconMoon size={16} stroke={1.5}/>
											<Box ml={10}>Dark</Box>
										</Center>
									),
								},
							]}/>
					</Group>
					<Title order={2} className={classes.title} align="center" mt="md" mb={50} children={'My Restaurant Location'}/>
					<div style={{position: 'relative'}}>
						<LoadingOverlay visible={isLoadingSignIn} overlayBlur={2}/>
						<TextInput
							label="Email
					address"
							placeholder="hello@gmail.com"
							size="md"
							onChange={(e) => setEmail(e.target.value)}/>
						<PasswordInput label="Password"
						               placeholder="Your password"
						               mt="md"
						               size="md"
						               onChange={(e) => setPassword(e.target.value)}/>
						<Button onClick={submitSignIn} fullWidth mt="xl" size="md" children="Login"/>
						<Text align="center" mt="md">
							Don't Have an account?{' '}
							<Link to={'/auth/signup'} children={'Register'}/>


						</Text>
						{errorSignIn && <Text align="center" mt="md" children={errorSignIn}/>}
					</div>
				</Paper>}
		</div>
	);
};