import {Sidebar} from "../components/Sidebar.jsx";
import {useParams} from "react-router-dom";
import {Map} from "../components/map/Map.jsx";


export const DashboardPage = () => {
	const {type} = useParams();

	return (
		<div style={{display: 'flex'}}>
			<Sidebar/>

			{type === 'movie' ? <div children={'movie'}/> : null}
			{type === 'map' ? <Map/> : null}
			{type === 'settings' ? <div children={'settings'}/> : null}
		</div>
	);
};

