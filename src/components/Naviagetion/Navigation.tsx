import styles from './Navigation.module.css';
import NavElement from '../NavElement/NavElement';

const Navigation = () => {
	const navElements: string[] = ['Lists', 'Analytics', 'Settings', 'Profile', 'Categories'];

	return (
		<div className={styles.navigation}>
			<h2>Navigation</h2>
			<hr />
			<ul className={styles.list}>
				{navElements &&
					navElements.map((element, index) => (
						<NavElement key={index} element={element} />
					))}
			</ul>
		</div>
	);
};

export default Navigation;
