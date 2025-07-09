import { useState } from 'react';
import styles from './NavElement.module.css';
import { List, Settings, User, ChartArea, Folder } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type Props = {
	element: string;
};

const iconMap = {
	List,
	Settings,
	Profile: User,
	Analytics: ChartArea,
	Categories: Folder,
};

type icon = keyof typeof iconMap;

const NavElement = ({ element }: Props) => {
	const [isActive, setIsActive] = useState(false);

	const hanldeOnClick = () => {
		setIsActive(true);
	};

	const Icon = iconMap[element as icon] || List;
	const path = `/${element.toLowerCase()}`;

	return (
		<li className={styles.listItem} onClick={hanldeOnClick} tabIndex={isActive ? 0 : 1}>
			<NavLink
				to={path}
				className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
			>
				<Icon />
				{element}
			</NavLink>
		</li>
	);
};

export default NavElement;
