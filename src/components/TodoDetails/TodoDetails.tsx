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
				<textarea name="description" />
			</div>
			<div className={styles.inputGroup}>
				<select name="category" id="category">
					<option value="1">Test</option>
					<option value="2">Test 2</option>
					<option value="3">Test 3</option>
					<option value="4">Test 4</option>
				</select>
			</div>
			<div className={styles.buttonContainer}>
				<button className={styles.addButton}>
					<Plus color="#fff" /> Add
				</button>
				<button className={styles.clearButton}>
					<Eraser color="#fff" /> Clear
				</button>
			</div>
		</div>
	);
};
