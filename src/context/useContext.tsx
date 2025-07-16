import { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [session, setSession] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getSession = async () => {
			try {
				const response = await supabase.auth.getSession();
				const {
					data: { session },
				} = response;

				setSession(session);
				setUser(session?.user);
				setIsLoading(false);
			} catch (error : any) {
				console.error('Error fetching session:', error);
				setError(error);
			}
		};

		getSession();

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
			setUser(session?.user);
			setIsLoading(false);
		});

		return () => {
			if (subscription) subscription.unsubscribe();
		};
	}, []);

	return (
		<AuthContext.Provider
			value={{ session, user, isLoading, error, signOut: () => supabase.auth.signOut() }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const getAuthContext = () => useContext(AuthContext);
