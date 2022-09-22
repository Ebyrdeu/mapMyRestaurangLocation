// Show Already existed Markers
import {useCollection} from "../../hooks/useCollection.js";
import {userFirestore} from "../../hooks/userFirestore.js";
import {useAuthContext} from "../../hooks/useAuthContext.js";
import {useState} from "react";
import {Marker, Popup} from "react-leaflet";
import {EditWindow} from "./EditWindow.jsx";
import {Button, Paper} from "@mantine/core";

export const MarkerPopup = () => {

	//Hooks
	const {data} = useCollection('locations');
	const {deleteNewLocationForRestaurant} = userFirestore();
	const {user} = useAuthContext();


	// Delete on Submit
	const submit = (id) => deleteNewLocationForRestaurant(id);

	const [show, setShow] = useState(false);

	// Render
	return data.map(({coordinates, title, desc, id}) => {
		return (
			<Marker key={id} position={[coordinates._lat, coordinates._long]}>
				<Popup>
					{show ? (<EditWindow lat={coordinates._lat} long={coordinates._long} id={id} setShow={setShow}/>) :
						(
							<Paper p={30} radius="sm">
								<h4>{title}</h4>
								<p>{desc}</p>
								{user.uid === import.meta.env.VITE_ADMIN_ID ? (
									<>
										<Button fullWidth mt="xl" onClick={() => submit(id)}>
											Delete Restaurant
										</Button>
										<Button fullWidth mt="xl" onClick={() => setShow(true)}>
											Change Mode
										</Button>
									</>
								) : null}
							</Paper>
						)
					}
				</Popup>
			</Marker>
		);
	});
};
