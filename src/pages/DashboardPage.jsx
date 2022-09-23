import {Sidebar} from "../components/sidebar/Sidebar.jsx";
import {useParams} from "react-router-dom";
import {Map} from "../components/map/Map.jsx";
import {AdminPanel} from "./AdminPanel";


export const DashboardPage = () => {
	const {uid, type} = useParams();

	return (
		<div style={{display: 'flex'}}>
			<Sidebar/>
			{type === 'home' ? <div children={'movie'}/> : null}
			{type === 'map' ? <Map/> : null}
			{type === 'settings' ? <div children={'settings'}/> : null}
			{type === 'admin' && uid === import.meta.env.VITE_ADMIN_ID ? <AdminPanel/> : null}
		</div>
	);
};

