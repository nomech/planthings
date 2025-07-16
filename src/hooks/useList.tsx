import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supaBaseUrl = import.meta.env.VITE_URL;
const supabaseKey = import.meta.env.VITE_KEY;
const supabase = createClient(supaBaseUrl, supabaseKey);

interface List {
	id: string;
	name: string;
	description: string;
}

export const useLists = () => {
	const [lists, setLists] = useState<List[]>([]);
	const [loading, setLoading] = useState(false);
	const [dbError, setDbError] = useState('');

	useEffect(() => {
		const getLists = async () => {
			setLoading(true);
			let { data, error } = await supabase
				.from('lists')
				.select('id, name, description')
				.eq('user', 'ae7104fd-869d-43bb-823e-d896bc35e702');

			setLists(data || []);

			if (error) {
				setDbError(error.message);
			}
			setLoading(false);
		};

		getLists();
	}, []);

	return { lists, loading, dbError };
};

export const useGetListItems = (id: number) => {
	const [lists, setLists] = useState<List[]>([]);
	const [loading, setLoading] = useState(false);
	const [dbError, setDbError] = useState('');

	useEffect(() => {
		const getDetailedLists = async () => {
			setLoading(true);
			let { data, error } = await supabase
				.from('lists')
				.select('*, list_items(*)')
				.eq('id', id)
				.eq('user', 'ae7104fd-869d-43bb-823e-d896bc35e702');

			setLists(data || []);

			if (error) {
				setDbError(error.message);
			}
			setLoading(false);
		};

		getDetailedLists();
	}, []);

	return { lists, loading, dbError };
};

export const useInsertList = (listToInsert: string[], listItemsToInsert: string[]) => {
	const [lists, setLists] = useState<List[]>([]);
	const [loading, setLoading] = useState(false);
	const [dbError, setDbError] = useState('');

	useEffect(() => {
		const insertList = async () => {
			setLoading(true);
			const { data: newList, error } = await supabase
				.from('lists')
				.insert([{ listToInsert }])
				.select();

				console.log(newList)

			const listId: number = newList[0].id;

			if (!error) {
				const { error } = await supabase.from('list_items').insert(listItemsToInsert);
			}
			setLoading(false);
		};
		insertList();
	});
};
