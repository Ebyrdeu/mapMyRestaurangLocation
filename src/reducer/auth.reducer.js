/*
*
* Basically this is simple Redux like way to store data
*
* */


// Simple initial State
// second argument in useReducer
export const authInitialState = {
	user: null, authIsReady: false
};

// Initializer(ala 3rd arg in dispatch) you can just ignore, because my IDE for some reason conflict with dispatch if it doesn't have it
export const authInitializer = () => {
	return {
		user: null, authIsReady: false
	};
};

// Very simple reducer function which do action based on type
// first argument in useReducer
export const authReducer = (state, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return {...state, user: action.payload};
		case 'LOGOUT':
			return {...state, user: null};
		case 'AUTH_IS_READY':
			return {user: action.payload, authIsReady: true};
		default:
			return state;
	}
};