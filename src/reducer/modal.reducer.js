/*
*
* Basically this is simple Redux like way to store data
*
* */


// Simple initial State
// second argument in useReducer
export const modalInitialState = {
	modalStatus: false,
	modalData: {},
	addModalStatus: false,
	addModalData: {}
};

// Initializer(ala 3rd arg in dispatch) you can just ignore, because my IDE for some reason conflict with dispatch if it doesn't have it
export const modalInitializer = () => {
	return {
		modalStatus: false,
		modalData: {},
		addModalStatus: false,
		addModalData: {}
	};
};

// Very simple reducer function which do action based on type
// first argument in useReducer
export const modalReducer = (state, action) => {
	switch (action.type) {
		case 'MODAL_STATUS':
			return {
				...state,
				modalStatus: action.payload,
			};
		case 'MODAL_DATA':
			return {
				...state,
				modalData: action.payload
			};

		case 'ADD_MODAL_STATUS':
			return {
				...state,
				addModalStatus: action.payload,
			};
		case 'ADD_MODAL_DATA':
			return {
				...state,
				addModalData: action.payload
			};
		default:
			return state;
	}
};