import {
	Anchor,
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
import {useSignUpStyles} from "./Singup.styles.js";
import {useSignup} from "../../hooks/useSingup.js";
import {useState} from "react";


export const SignUpForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, setDisplayName] = useState('');
	const {classes} = useSignUpStyles(undefined, undefined);
	const {colorScheme, toggleColorScheme} = useMantineColorScheme();
	const {signup, isLoading, error} = useSignup();

	const submit = () => signup(email, password, displayName);

	return (
		<div className={classes.wrapper}>
			<Paper className={classes.form} radius={0} p={30}>
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
					<LoadingOverlay visible={isLoading} overlayBlur={2}/>
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
					<Button onClick={submit} fullWidth mt="xl" size="md" children="Register"/>
					<Text align="center" mt="md">
						Have an account?{' '}
						<Anchor href="#" weight={700} onClick={(event) => event.preventDefault()}>
							Login
						</Anchor>
					</Text>
					{error && <Text align="center" mt="md" children={error}/>}
				</div>
			</Paper>
		</div>
	);
};