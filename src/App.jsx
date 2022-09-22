import {SignUpPage} from "./pages/SignUpPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
	return (

		<Router>
		<div className="App">
		<Routes>
			<Route path='/' element={<SignUpPage/>}/>
			<Route path='/*' element={<NotFoundPage/>}/>
		</Routes>
	</div>
		</Router>
	);
}

export default App;
