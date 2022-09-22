import {SignUpPage} from "./pages/SignUpPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {StartPage} from "./pages/StartPage.jsx";
import {DashboardPage} from "./pages/DashboardPage";

function App() {
	return (

		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<StartPage/>}/>
					<Route path="/auth/:type" element={<SignUpPage/>}/>
					<Route path="/dashBoard/:uid/:type" element={<DashboardPage/>} />
					<Route path="/*" element={<NotFoundPage/>}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
