import React from 'react';
import List from '../List/List';
import { useParams } from 'react-router-dom';

const ListDetails = () => {
	const { id } = useParams(); 

	console.log(id);

	return <div>ListDetails</div>;
};

export default ListDetails;
