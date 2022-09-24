import {Sidebar} from "../components/sidebar/Sidebar.jsx";
import {useParams} from "react-router-dom";
import {Map} from "../components/map/Map.jsx";
import {AdminPanelPage} from "./AdminPanelPage.jsx";


export const DashboardPage = () => {

	//Hooks
	const {uid, type} = useParams();

	// Render
	return (
		<div style={{display: 'flex'}}>
			<Sidebar/>
				{type === 'home' ? <div children={'home'}/> : null}
				{type === 'map' ? <Map/> : null}
				{type === 'settings' ? <div children={'settings'}/> : null}
				{type === 'admin' && uid === import.meta.env.VITE_ADMIN_ID ? <AdminPanelPage/> : null}
		</div>
	);
};

