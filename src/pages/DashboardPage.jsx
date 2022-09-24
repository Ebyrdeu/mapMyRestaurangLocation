import {Sidebar} from "../components/sidebar/Sidebar.jsx";
import {useParams} from "react-router-dom";
import {AdminPanelPage} from "./AdminPanelPage.jsx";
import {MapPage} from "./MapPage";


export const DashboardPage = () => {

	//Hooks
	const {uid, type} = useParams();

	// Render
	return (
		<div style={{display: 'flex'}}>
			<Sidebar/>
			{type === 'admin' && uid === import.meta.env.VITE_ADMIN_ID ? <AdminPanelPage/> : null}
			{type === 'map' ? <MapPage/> : null}
			{type === 'settings' ? <div children={'settings'}/> : null}
		</div>
	);
};

