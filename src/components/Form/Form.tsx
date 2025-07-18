import styles from './Form.module.css';
import ListTitle from '../ListTitle/ListTitle';
import { Plus, Eraser } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
//import { useInsertList } from '../../hooks/useList';

type Props = {
	handleOnSubmit: (formData: FormValues) => void;
};

/* type FormValues = {
	name: string;
	description: string;
	category: number;
}; */

type FormValues = z.infer<typeof schema>;

// Teaching notes:
// This component is a modal form for adding a new project.
// It uses React Hook Form for form handling and Zod for validation.

const schema = z.object({
	title: z.string().min(1, 'List titel is required').max(40),
	description: z.string().min(10).max(2000),
	task: z.string().min(1, 'Task name is required'),
	details: z.string().min(10).max(2000),
	category: z.number(),
});

const Form = ({ handleOnSubmit }: Props) => {
	const defaultValues: FormValues = {
		title: '',
		description: '',
		task: '',
		details: '',
		category: 0,
	};

	//const { insertList } = useInsertList();

	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful },
	} = useForm<FormValues>({
		defaultValues: defaultValues,
		resolver: zodResolver(schema),
	});

	useEffect(() => {
		reset({ task: '', details: '' });
	}, [isSubmitSuccessful]);

	const onSubmit = (formDataToSubmit: FormValues) => {
		console.log(formDataToSubmit);
		handleOnSubmit(formDataToSubmit);
		//insertList(testList, testListItems);
	};

	return (
		<>
			<div className={styles.formContainer}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.titleContainer}>
						<input
							className={styles.title}
							{...register('title')}
							type="text"
							placeholder="List name"
						/>
						<div className={styles.inputGroup}>
							<label htmlFor="description">Description</label>
							<textarea
								{...register('description')}
								id="description"
								name="description"
							/>
						</div>

						<div className={styles.inputGroup}>
							<select
								{...register('category', { valueAsNumber: true })}
								id="category"
							>
								<option defaultValue="" disabled>
									Select category
								</option>
								<option value={1}>Test</option>
								<option value={2}>Test 2</option>
								<option value={3}>Test 3</option>
								<option value={4}>Test 4</option>
							</select>
						</div>
					</div>

					<div className={styles.todoContainer}>
						<div className={styles.inputGroup}>
							<label htmlFor="task">Task name</label>
							<input {...register('task')} type="text" id="task" name="task" />
						</div>
						<div className={styles.inputGroup}>
							<label htmlFor="details">Task details</label>
							<textarea {...register('details')} id="details" name="details" />
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
				</form>
			</div>
		</>
	);
};

export default Form;
