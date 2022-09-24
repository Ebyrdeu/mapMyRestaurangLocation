import {Paper} from '@mantine/core';
import {useSignUpStyles} from "../styles/Singup.styles.js";
import {SignForm} from "../components/SignForm/Sign.form.jsx";

export const SignPage = () => {
	// Hooks
	const {classes} = useSignUpStyles(undefined, undefined);

	return <>
		<div className={classes.wrapper}>
			<Paper className={classes.form} radius={0} p={30} children={<SignForm/>}/>
		</div>
	</>;
};

