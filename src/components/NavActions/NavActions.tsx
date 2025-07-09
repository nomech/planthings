import { useNavigate } from 'react-router-dom';
import styles from './NavActions.module.css';
import { useLocation } from 'react-router-dom';

const NavActions = () => {
	const navigate = useNavigate();
	const handleAddClick = () => {
		navigate('/lists/add');
	};

	const location = useLocation();

	const isListPage = location.pathname.split('/').filter((path) => path != '')[0] === 'lists';
	console.log(isListPage);

	return (
		<div>
			{isListPage && (
				<button className={styles.button} onClick={handleAddClick}>
					Add
				</button>
			)}
		</div>
	);
};

export default NavActions;
