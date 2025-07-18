// Login.jsx
import React from 'react';
import { supabase } from '../supabase';

export default function LoginPage() {
	const handleGoogleLogin = async (e) => {
		e.preventDefault();
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				queryParams: {
					access_type: 'offline', // get refresh token
					prompt: 'consent', // force re-consent
				},
				redirectTo: window.location.origin + '/auth/callback',
			},
		});
		if (error) console.error('Google login error:', error);
	};

	return <button onClick={handleGoogleLogin}>Continue with Google</button>;
}
