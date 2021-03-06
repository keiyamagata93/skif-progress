import Image from 'next/image';
import { useSession } from 'next-auth/client';
import { AspectRatio, Flex, Heading, Spinner } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import SignUp from '../components/SignUp';
import Welcome from '../components/Welcome';
import ToProfile from '../components/ToProfile';
import knex from '../knex';
import ReactPlayer from 'react-player/youtube';

const Home = ({ categories, users, levels }) => {
	const [session, loading] = useSession();
	const thisUser = session ? users.filter(user => user.email === session.user.email)[0] : null;
	// console.log(thisUser);

	return (
		<Flex>
			<NavBar categories={categories} />
			<Flex w="100%" alignItems="center" flexDirection="column" p="1em">
				<Flex alignItems="center" mb={10}>
					<Image src="/images/skif-logo.png" width={100} height={100} />
					<Heading
						as="h1"
						fontSize={['1.5rem', '2rem', '2.5rem']}
						color="teal.600"
						ml={5}>
						SKIF Progress App
					</Heading>
				</Flex>
				{loading && <Spinner />}
				{!session && !loading && <Welcome />}
				{session && (
					<>
						{thisUser.name === null || thisUser.level_id === null ? (
							<SignUp user={thisUser} levels={levels} />
						) : (
							<ToProfile user={thisUser} />
						)}
					</>
				)}
				<AspectRatio ratio={16 / 9} w={['100%', '80%', '70%', '60%']} mb={100}>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=k5dnYW-2pFE`}
						width="100%"
						height="100%"
						controls={true}
					/>
				</AspectRatio>
			</Flex>
		</Flex>
	);
};

export default Home;

export const getServerSideProps = async () => {
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
			// session,
			categories,
			users,
			levels,
		},
	};
};
