import { useLists, useInsertList } from '../hooks/useList';

const ListsPage = () => {
	const { lists, loading, dbError } = useLists();

	return (
		<div>
			{dbError && <p>{dbError}</p>}
			{lists && lists.map((list, index) => <p key={index}>{list.title}</p>)}
		</div>
	);
};

export default ListsPage;
