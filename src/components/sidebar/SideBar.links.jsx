import {useStylesDashboardPage} from "../../styles/DashboardPage.styles.js";
import {Link} from "react-router-dom";
import {Tooltip, UnstyledButton} from "@mantine/core";

export const SideBarLinks = ({icon: Icon, label, active, onClick, link, styles}) => {
	const {classes, cx} = useStylesDashboardPage(undefined, undefined);

	return (<div style={styles}>
			<Link to={link}>
				<Tooltip label={label} position="right" transitionDuration={0}>
					<UnstyledButton onClick={onClick} className={cx(classes.link, {[classes.active]: active})} children={<Icon stroke={1.5}/>}/>
				</Tooltip>
			</Link>
		</div>);
};
