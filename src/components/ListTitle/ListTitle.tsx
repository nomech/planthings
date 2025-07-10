import { useState, useEffect, useRef } from 'react';
import styles from './ListTitle.module.css';
import { SquarePen } from 'lucide-react';
import type { ChangeEvent, MouseEvent } from 'react';

type Props = {
	title: string;
};

const ListTitle = ({ title }: Props) => {
	const [isReadonly, setIsReadonly] = useState(false);
	const [listTitle, setListTitle] = useState('');

	const inputRef = useRef<HTMLInputElement>(null);

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setListTitle(value);
	};

	const handleOnClick = (e: MouseEvent) => {
		e.preventDefault();
		setIsReadonly((prev) => !prev);
	};

	useEffect(() => {
		if (title) {
			setListTitle(title);
			setIsReadonly(true);
		}
	}, [title]);

	useEffect(() => {
		if (!isReadonly) {
			inputRef.current?.focus();
		}
	}, [isReadonly]);

	return (
		<div className={styles.titleContainer}>
			<input
				className={styles.title}
				type="text"
				value={listTitle}
				placeholder="List name"
				readOnly={isReadonly}
				onChange={handleOnChange}
				ref={inputRef}
			/>
			{title && (
				<button className={styles.editButton} onClick={handleOnClick}>
					<SquarePen className={styles.edit} />
				</button>
			)}
		</div>
	);
};

export default ListTitle;
