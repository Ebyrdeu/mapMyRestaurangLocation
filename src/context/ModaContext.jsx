import {createContext, useReducer} from "react";
import {modalInitializer, modalInitialState, modalReducer} from "../reducer/modal.reducer.js";


// Context for Modal usage
// Can Find on Admin Panel and Map

export const ModalContext = createContext();

export const ModalContextProvider = ({children}) => {

	const [state, dispatch] = useReducer(modalReducer, modalInitialState, modalInitializer);


	return <ModalContext.Provider value={{...state, dispatch}} children={children}/>;
};