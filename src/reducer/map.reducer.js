/*
*
* Basically this is simple Redux like way to store data
*
* */


// Simple initial State
// second argument in useReducer
export const mapInitialState = {
	markerStatus: false, homeStatus: false, mapOnSearchAction: null, from: null, to : null
};

// Initializer(ala 3rd arg in dispatch) you can just ignore, because my IDE for some reason conflict with dispatch if it doesn't have it
export const mapInitializer = () => {
	return {
		markerStatus: false, homeStatus: false, mapOnSearchAction: null, from: null,to : null
	};
};

// Very simple reducer function which do action based on type
// first argument in useReducer
export const mapReducer = (state, action) => {
	switch (action.type) {
		case 'MARKER_STATUS':
			return {
				...state, markerStatus: action.payload
			};
		case 'HOME_STATUS':
			return {
				...state, homeStatus: action.payload
			};

		case 'MAP_ON_SEARCH_ACTION':
			return {
				...state, mapOnSearchAction: action.payload
			};

		case 'FROM':
			return {
				...state, from: action.payload
			};
		case 'TO':
			return {
				...state, to: action.payload
			};
		default:
			return state;
	}
};