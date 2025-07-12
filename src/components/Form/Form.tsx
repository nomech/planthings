import styles from './Form.module.css';
import ListTitle from '../ListTitle/ListTitle';
import { TodoDetails } from '../TodoDetails/TodoDetails';
import type { FormEventHandler } from 'react';

type Props = {
	handleOnSubmit: FormEventHandler<HTMLFormElement>;
};

const Form = ({ handleOnSubmit }: Props) => {
	return (
		<div className={styles.formContainer}>
			<form className={styles.form} onSubmit={handleOnSubmit}>
				<ListTitle title="" />
				<TodoDetails />
			</form>
		</div>
	);
};

export default Form;
