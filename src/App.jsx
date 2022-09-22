import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {StartPage} from "./pages/StartPage.jsx";
import {DashboardPage} from "./pages/DashboardPage";
import {useAuthContext} from "./hooks/useAuthContext.js";
import {SignUpPage} from "./pages/SignUpPage";

function App() {
	const {user, authIsReady} = useAuthContext();
	return (


		<div className="App">
			{authIsReady &&
				<Router>
					<Routes>
						<Route path="/" element={<StartPage/>}/>
						<Route path="/auth/:type" element={user ? <Navigate to={`/dashBoard/${user.uid}/map`}/> : <SignUpPage/>}/>
						<Route path="/dashboard/:uid/:type" element={!user ? <Navigate to={`/auth/singin`}/> : <DashboardPage/>}/>
						<Route path="/*" element={<NotFoundPage/>}/>
					</Routes>
				</Router>
			}
		</div>

	);
}

export default App;
