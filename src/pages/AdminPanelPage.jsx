import {useState} from "react";
import {AdminButton} from "../components/admin/Admin.button.jsx";
import {AdminTable} from "../components/admin/Admin.table";
import {ScrollArea} from '@mantine/core';
import {SuperModal} from "../components/modal/SuperModal";

export const AdminPanelPage = () => {

	// State
	const [changePreview, setChangePreview] = useState(1);


	// Render
	return (
		<ScrollArea>
			<SuperModal/>
			<AdminButton setChangePreview={setChangePreview}/>
			<AdminTable changePreview={changePreview}/>
		</ScrollArea>
	);
};

