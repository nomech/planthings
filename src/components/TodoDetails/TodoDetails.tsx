import styles from './TodoDetails.module.css';
import { Plus, Eraser } from 'lucide-react';

export const TodoDetails = () => {
	return (
		<div className={styles.todoContainer}>
			<div className={styles.inputGroup}>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" />
			</div>
			<div className={styles.inputGroup}>
				<label htmlFor="name">Description</label>
				<input type="text" name="description" />
			</div>
			<div className={styles.buttonContaoner}>
				<button className={styles.addButton}>
					<Plus /> Add
				</button>
				<button className={styles.clearButton}>
					<Eraser /> Clear
				</button>
			</div>
		</div>
	);
};
