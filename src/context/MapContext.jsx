import {createContext, useReducer} from "react";
import {mapInitializer, mapInitialState, mapReducer} from "../reducer/map.reducer.js";

// Context used only in MapPage.jsx

export const MapContext = createContext();

export const MapContextProvider = ({children}) => {

	const [state, dispatch] = useReducer(mapReducer, mapInitialState, mapInitializer);


	return <MapContext.Provider value={{...state, dispatch}} children={children}/>;
};