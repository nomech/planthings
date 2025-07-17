import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supaBaseUrl = import.meta.env.VITE_URL;
const supabaseKey = import.meta.env.VITE_KEY;
const supabase = createClient(supaBaseUrl, supabaseKey);

interface List {
	name: string;
	description: string;
}

interface ListItem {
	name: string;
	description: string;
	completed: boolean;
	completed_at: string | null;
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

export const useInsertList = () => {
	const [loading, setLoading] = useState(false);
	const [dbError, setDbError] = useState('');

	const insertList = async (listToInsert: List, listItemsToInsert: ListItem[]) => {
		setLoading(true);
		const { data: newList, error: listError } = await supabase
			.from('lists')
			.insert([{ listToInsert }])
			.select();

		const newListId = newList?.[0]?.id;

		if (!listError) {
			const listItemsWithId = listItemsToInsert.map((item) => ({
				...item,
				list_id: newListId,
			}));

			const { error: listItemError } = await supabase
				.from('list_items')
				.insert(listItemsWithId);
			if (listItemError) {
				setDbError(listItemError.message);
			}
		} else {
			setDbError(listError.message);
		}
		setLoading(false);
	};

	return { insertList, loading, dbError };
};
