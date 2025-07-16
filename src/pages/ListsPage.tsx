import { useLists, useGetListItems } from '../hooks/useList';

const ListsPage = () => {
	const { lists, loading, dbError } = useLists();
	console.log(lists);

	return (
		<div>
			{dbError && <p>{dbError}</p>}
			{lists && lists.map((list) => <p key={list.id}>{list.name}</p>)}
		</div>
	);
};

export default ListsPage;
