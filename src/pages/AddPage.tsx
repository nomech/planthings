import { useState } from 'react';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import { useInsertList } from '../hooks/useList';

// const { insertList } = useInsertList();
export interface TodoFormData {
	title: string;
	description: string;
	category: number;
	task: string;
	details: string;
}

export interface listItem {
	task: string;
	details: string;
}

function AddPage() {
	const [data, setData] = useState<TodoFormData[]>([]);

	const handleFormData = (submittedFormData: TodoFormData): void => {
		setData((prev) => [...prev, submittedFormData]);
	};

	const { insertList } = useInsertList();

	const handleOnClick = () => {
		console.log(data);
		if (data) {
			let formattedData: {
				title: string;
				description: string;
				category: number;
				listItems: listItem[]; // Explicitly type listItems as an array of listItem
			} = {
				title: '',
				description: '',
				listItems: [],
				category: 0,
			};

			data.forEach((item) => {
				if (!formattedData.title) {
					formattedData.title = item.title;
				}
				if (!formattedData.description) {
					formattedData.description = item.description;
				}

				if (!formattedData.category) {
					formattedData.category = item.category;
				}

				const listItem: listItem = {
					task: item.task,
					details: item.details,
				};

				formattedData.listItems.push(listItem);
			});

			console.log(formattedData);
			insertList(formattedData);
		}
	};

	return (
		<div className="listContainer">
			<Form handleOnSubmit={handleFormData} />
			<List data={data} />
			<button onClick={handleOnClick}> Create List</button>
		</div>
	);
}

export default AddPage;
