import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Navbar from '../../../components/NavBar';
import knex from '../../../knex';

const Progress = dynamic(() => import('../../../components/Progress'), { ssr: false });

const user = ({ categories, users, user, level }) => {
	return (
		<Flex>
			<Navbar categories={categories} />
			<Flex w="100%" justifyContent="center" alignItems="center" flexDirection="column">
				<Heading>{user.name}</Heading>
				<Progress user={user} level={level} levelid={user.level_id} />
				<Link href={`/user/${user.id}/progress-update`}>
					<Button leftIcon={<AddIcon />} m={15}>
						Update Progress
					</Button>
				</Link>
			</Flex>
		</Flex>
	);
};

export default user;

export const getServerSideProps = async context => {
	const id = context.query.id;
	// Query
	const data1 = await knex('categories');
	const data2 = await knex('users');
	const data3 = await knex('users').where('id', id).first();
	const data4 = await knex('levels');

	// Send results als props
	const categories = JSON.parse(JSON.stringify(data1));
	const users = JSON.parse(JSON.stringify(data2));
	const user = JSON.parse(JSON.stringify(data3));
	const level = JSON.parse(JSON.stringify(data4));

	return {
		props: {
			categories,
			users,
			user,
			level,
		},
	};
};
