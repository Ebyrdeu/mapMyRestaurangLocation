import {useState} from "react";
import {AdminButton} from "../components/admin/Admin.button.jsx";
import {AdminTable} from "../components/admin/Admin.table";
import {ScrollArea} from '@mantine/core';
import {AdminModal} from "../components/admin/Admin.modal";

export const AdminPanelPage = () => {

	// State
	const [changePreview, setChangePreview] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [data, setData] = useState({});

	// Render
	return (
		<ScrollArea>
			<AdminModal data={data} showModal={showModal} setShowModal={setShowModal}/>
			<AdminButton setChangePreview={setChangePreview}/>
			<AdminTable dataForModal={setData} setShowModal={setShowModal} changePreview={changePreview}/>
		</ScrollArea>
	);
};

