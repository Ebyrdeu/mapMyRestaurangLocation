import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthContextProvider} from "./context/AuthContext";
import {MantineContext} from "./context/MantineContext.jsx";
import {ModalContextProvider} from "./context/ModaContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthContextProvider>
			<MantineContext>
				<ModalContextProvider>
					<App/>
				</ModalContextProvider>
			</MantineContext>
		</AuthContextProvider>


	</React.StrictMode>
);
