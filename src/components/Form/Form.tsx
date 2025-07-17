import styles from './Form.module.css';
import ListTitle from '../ListTitle/ListTitle';
import { Plus, Eraser } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useInsertList } from '../../hooks/useList';

type Props = {
	handleOnSubmit: (formData: FormValues) => void;
};

const testList = {
	name: 'Test List',
	description: 'This is a test list description',
	category: 1,
};
const testListItems = [
	{
		name: 'Test Item 1',
		description: 'This is a test item description',
		completed: false,
		completed_at: null,
	},
	{
		name: 'Test Item 2',
		description: 'This is another test item description',
		completed: false,
		completed_at: null,
	},
	{
		name: 'Test Item 3',
		description: 'This is yet another test item description',
		completed: false,
		completed_at: null,
	},
];
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
	name: z.string().min(1, 'Project name is required'),
	description: z.string().min(10).max(500),
	category: z.number(),
});

const Form = ({ handleOnSubmit }: Props) => {
	const defaultValues: FormValues = {
		name: '',
		description: '',
		category: 0,
	};

	const { insertList } = useInsertList();

	const { register, handleSubmit } = useForm<FormValues>({
		defaultValues: defaultValues,
		resolver: zodResolver(schema),
	});

	const onSubmit = (formDataToSubmit: FormValues) => {
		handleOnSubmit(formDataToSubmit);
		insertList(testList, testListItems);
	};
	return (
		<>
			<div className={styles.formContainer}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<ListTitle title="" />
					<div className={styles.todoContainer}>
						<div className={styles.inputGroup}>
							<label htmlFor="name">Name</label>
							<input {...register('name')} type="text" id="name" name="name" />
						</div>
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
