// src/pages/AuthCallback.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

const AuthCallback = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const setSessionFromUrl = async () => {
			const { error } = await supabase.auth.getSessionFromUrl();
			if (error) {
				console.error('Error processing login callback:', error.message);
			}
			navigate('/');
		};
		setSessionFromUrl();
	}, [navigate]);

	return <p>Logging you in...</p>;
};

export default AuthCallback;
