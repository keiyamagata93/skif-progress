import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Navbar from '../../../components/NavBar';
import Modal from '../../../components/Modal';
import knex from '../../../knex';
import { useSession } from 'next-auth/client';

const Progress = dynamic(() => import('../../../components/Progress'), { ssr: false });

const user = ({ categories, user, level }) => {
	const [session] = useSession();
	
	const levelMax = ((user.kihon + user.kata + user.kumite) / level[user.level_id - 1].max_points > .9999) ? true : false
	
	const submitText = 'Level up!'
	const buttonText = 'Back'

	const submitLevelUp = async (e) => {
		const data = {
			level_id: user.level_id + 1,
			kihon: 0,
			kata: 0,
			kumite: 0,
		};
		e.preventDefault();
		const response = await fetch(`/api/user/${user.id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		console.log(result);
	}

	return (
		<Flex>
			<Navbar categories={categories} />
			{session ? (
				<Flex
					as="main"
					w="calc(100vw - 2vh - 60px)"
					h="98vh"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					pos="absolute"
					top="2vh"
					left="calc(60px + 2vh)">
					<Heading as="h1" fontSize={['1.5rem', '2rem', '2.5rem']} color="teal.600">
						{user.name} / {level[user.level_id - 1].level}
					</Heading>
					<Progress user={user} level={level} levelid={user.level_id} />
					<Flex mt={10}>
						<Link href={`/user/${user.id}/progress-update`}>
							<Button leftIcon={<AddIcon />}>
								Update Progress
							</Button>
						</Link>
						{ levelMax && <Box as='form' onSubmit={submitLevelUp} ml={5}> 
							{/* <Button type='submit' leftIcon={<AddIcon />}>Level up!</Button> */}
							<Modal id={user.id} submitText={submitText}/>
						</Box>}
					</Flex>
				</Flex>
			) : (
				<Flex
					as="main"
					w="calc(100vw - 2vh - 60px)"
					h="98vh"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					pos="absolute"
					top="2vh"
					left="calc(60px + 2vh)">
					<Heading>You're not signed in</Heading>
				</Flex>
			)}
		</Flex>
	);
};

export default user;

export const getServerSideProps = async context => {
	const id = context.query.id;
	// Query
	const data1 = await knex('categories');
	const data2 = await knex('users').where('id', id).first();
	const data3 = await knex('levels');

	// Send results als props
	const categories = JSON.parse(JSON.stringify(data1));
	const user = JSON.parse(JSON.stringify(data2));
	const level = JSON.parse(JSON.stringify(data3));

	return {
		props: {
			categories,
			user,
			level,
		},
	};
};
