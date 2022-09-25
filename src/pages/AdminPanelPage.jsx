import {useState} from "react";
import {AdminButton} from "../components/admin/Admin.button.jsx";
import {AdminTable} from "../components/admin/Admin.table";
import {ScrollArea} from '@mantine/core';
import {EditModal} from "../components/modal/EditModal.jsx";

export const AdminPanelPage = () => {

	// State
	const [changePreview, setChangePreview] = useState(1);


	// Render
	return (<ScrollArea sx={{height: '100vh'}}>
			<EditModal/>
			<AdminButton setChangePreview={setChangePreview}/>
			<AdminTable changePreview={changePreview}/>
		</ScrollArea>);
};

