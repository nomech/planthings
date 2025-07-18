import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListsPage';
import SettingsPage from '../pages/SettingsPage';
import AddPage from '../pages/AddPage';
import List from '../components/List/List';

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<HomePage />} />
			<Route path="lists" element={<ListPage />} />
			<Route path="lists/add" element={<AddPage />} />
			<Route path="lists/:id" element={<AddPage />} />
			<Route path="settings" element={<SettingsPage />} />
		</Route>
	)
);
