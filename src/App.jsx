import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {StartPage} from "./pages/StartPage.jsx";
import {DashboardPage} from "./pages/DashboardPage";
import {useAuthContext} from "./hooks/useAuthContext.js";
import {SignPage} from "./pages/SignPage.jsx";

function App() {

	// Hooks
	const {user, authIsReady} = useAuthContext();

	// Render
	return (<div className="App">
			{authIsReady && <Router>
				<Routes>
					<Route path="/" element={<StartPage/>}/>
					<Route path="/auth/:type" element={user ? <Navigate to={`/dashBoard/${user.uid}/map`}/> : <SignPage/>}/>
					<Route path="/dashboard/:uid/:type" element={!user ? <Navigate to={`/auth/singin`}/> : <DashboardPage/>}/>
					<Route path="/*" element={<NotFoundPage/>}/>
				</Routes>
			</Router>}
		</div>

	);
}

export default App;
