import styles from './Form.module.css';
import ListTitle from '../ListTitle/ListTitle';
import { TodoDetails } from '../TodoDetails/TodoDetails';

const Form = () => {
	return (
		<form className={styles.form}>
			<ListTitle title="" />
			<TodoDetails />
			<div></div>
		</form>
	);
};

export default Form;
