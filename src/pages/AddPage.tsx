import { useState } from 'react';
import Form from '../components/Form/Form';

interface FormData {
	title: string;
	name: string;
	description: string;
}

function AddPage() {
	const [data, setData] = useState<FormData[]>([]);

	const handleFormData = (formData: FormData) => {
		setData((prev) => [...prev, formData]);
	};

	return <Form handleOnSubmit={handleFormData} />;
}

export default AddPage;
