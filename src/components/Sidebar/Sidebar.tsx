import styles from './Sidebar.module.css';
import Navigation from '../Naviagetion/Navigation';
import NavActions from '../NavActions/NavActions';

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<Navigation />
			<hr />
			<NavActions />
		</div>
	);
};

export default Sidebar;
