import {Button, LoadingOverlay, PasswordInput, Text, TextInput, Title} from "@mantine/core";

import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import {useSignUpStyles} from "../../styles/Singup.styles.js";
import {useSignup} from "../../hooks/useSingup.js";
import {useSignIn} from "../../hooks/useSignIn.js";
import {useFirestore} from "../../hooks/useFirestore.js";

export const SignForm = () => {
	// Router
	const {type} = useParams();

	// States
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, setDisplayName] = useState('');

	// Hooks
	const {classes} = useSignUpStyles(undefined, undefined);
	const {signup, isLoadingSingUp, errorSingUp} = useSignup();
	const {signIn, isLoadingSignIn, errorSignIn} = useSignIn();
	const {addNewUser} = useFirestore();

	// Submit Functions
	const submitSingUp = () => {
		return addNewUser(email, password, displayName, 'users') && signup(email, password, displayName);
	};
	const submitSignIn = () => signIn(email, password);


	const SingInFrom = type === 'singin' ? (<>
		<Title order={2} className={classes.title} align="center" mt="md" mb={50} children={'Welcome Back'}/>
		<div style={{width: '100%', position: 'relative'}}>
			<LoadingOverlay radius="sm" visible={isLoadingSignIn} overlayBlur={2}/>
			<TextInput label="Email address" placeholder="hello@gmail.com" size="md" onChange={e => setEmail(e.target.value)}/>
			<PasswordInput label="Password" placeholder="Your password" mt="md" size="md" onChange={e => setPassword(e.target.value)}/>
		</div>
		<Button fullWidth mt="xl" size="md" children={'Sign In'} onClick={submitSignIn}/>
		<Text align="center" mt="md">
			Don&apos;t have an account?{' '}
			<Link to={'/auth/signup'} children={'Register'}/>
		</Text>
		<Text align="center" mt="md">{errorSignIn}</Text>
	</>) : null;

	const SingUpFrom = type === 'signup' ? (<>
		<Title order={2} className={classes.title} align="center" mt="md" mb={50} children={'Are you new here ?'}/>
		<div style={{width: '100%', position: 'relative'}}>
			<LoadingOverlay visible={isLoadingSingUp} overlayBlur={2}/>
			<TextInput label="Username" placeholder="Boba Fet" size="md" onChange={e => setDisplayName(e.target.value)}/>
			<TextInput mt="md" mb="md" label="Email address" placeholder="hello@gmail.com" size="md" onChange={e => setEmail(e.target.value)}/>
			<PasswordInput label="Password" placeholder="Your password" size="md" onChange={e => setPassword(e.target.value)}/>
		</div>
		<Button fullWidth mt="xl" size="md" children={'Login'} onClick={submitSingUp}/>
		<Text align="center" mt="md">
			Have an account?{' '}
			<Link to={'/auth/singin'} children={'Login'}/>

		</Text>
		<Text align="center" mt="md">{errorSingUp}</Text>
	</>) : null;

	return (<>
		{SingUpFrom}
		{SingInFrom}
	</>);
};