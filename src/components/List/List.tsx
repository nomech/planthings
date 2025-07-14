import styles from './List.module.css';
type Props = {
	data: {
		name: string;
		description: string;
		category: number;
	}[];
};

const List = ({ data }: Props) => {
	return (
		<div className={styles.listContainer}>
			<div className={styles.list}>
				<h2>Todo's</h2>
				<hr />
				{data.length == 0 && <p>There are currently no items in the list</p>}
				<ul>{data && data.map((todo, index) => <li key={index}>{todo.name}</li>)}</ul>
			</div>
		</div>
	);
};

export default List;
