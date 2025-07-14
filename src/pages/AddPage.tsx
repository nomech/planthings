import { useState } from 'react';
import Form from '../components/Form/Form';
import List from '../components/List/List';
export interface TodoFormData {
	name: string;
	description: string;
	category: number;
}

function AddPage() {
	const [data, setData] = useState<TodoFormData[]>([]);

	const handleFormData = (submittedFormData: TodoFormData): void => {
		setData((prev) => [...prev, submittedFormData]);
	};

	return (
		<div className="listContainer">
			<Form handleOnSubmit={handleFormData} />
			<List data={data} />
		</div>
	);
}

export default AddPage;
