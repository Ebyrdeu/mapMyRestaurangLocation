import {SignUpPage} from "./pages/SignUpPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {StartPage} from "./pages/StartPage.jsx";

function App() {
	return (

		<Router>
		<div className="App">
		<Routes>
			<Route path='/' element={<StartPage/>}/>
			<Route path='/signup' element={<SignUpPage/>}/>
			<Route path='/*' element={<NotFoundPage/>}/>
		</Routes>
	</div>
		</Router>
	);
}

export default App;
