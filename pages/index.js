import Head from 'next/head';
import Link from 'next/link';
import { getSession, useSession } from 'next-auth/client';
import { Flex, Text } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import SignUp from '../components/SignUp';
import knex from '../knex';

const Home = ({ categories, users, levels }) => {
	const [session, loading] = useSession();
	const thisUser = session ? users.filter(user => user.email === session.user.email)[0] : null;
	// console.log(thisUser);

	return (
		<Flex>
			<Head>
				<title>SKIF Progress App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar categories={categories} />
			<Flex w="100%" justifyContent="center" alignItems="center" flexDirection="column">
				{session && (
					<>
						{thisUser.name === null || thisUser.level_id === null ? (
							<>
								<Text textAlign="center">
									Thank you for using the SKIF Progress App! <br />
									It seems like you don't have an account yet. Register here.
								</Text>
								<SignUp user={thisUser} levels={levels} />
							</>
						) : null}
						<Link href={`/user/${thisUser.id}`}>
							<a>Profile</a>
						</Link>
					</>
				)}
				{!session && <p>Please sign in.</p>}
			</Flex>
		</Flex>
	);
};

export default Home;

export const getServerSideProps = async context => {
	const session = await getSession(context);
	// Query
	const data1 = await knex('categories');
	const data2 = await knex('users');
	const data3 = await knex('levels');

	// Send results als props
	const categories = JSON.parse(JSON.stringify(data1));
	const users = JSON.parse(JSON.stringify(data2));
	const levels = JSON.parse(JSON.stringify(data3));
	// console.log(levels);

	return {
		props: {
			session,
			categories,
			users,
			levels,
		},
	};
};
