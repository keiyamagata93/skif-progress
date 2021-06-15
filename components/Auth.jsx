import { signIn, signOut, useSession } from 'next-auth/client';
import { Button } from '@chakra-ui/react';

const Auth = () => {
	const [session] = useSession();

	return (
		<>
			{!session && (
				<Button
					onClick={() => {
						signIn();
					}}>
					Sign In
				</Button>
			)}
			{session && (
				<Button
					onClick={() => {
						signOut();
					}}>
					Sign Out
				</Button>
			)}
		</>
	);
};

export default Auth;
