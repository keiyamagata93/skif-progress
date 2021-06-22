import React, { useState } from 'react';
import { Box, Button, Checkbox, Flex, Heading } from '@chakra-ui/react';
import NavBar from '../../../components/NavBar';
import Modal from '../../../components/Modal';
import knex from '../../../knex';
import { useSession } from 'next-auth/client';

const progressUpdate = ({ categories, user }) => {
	const [session] = useSession();

	const [kihon, setKihon] = useState(false);
	const [kata, setKata] = useState(false);
	const [kumite, setKumite] = useState(false);

	const submitText = 'Submit'
	const buttonText = 'Back'

	const handleSubmit = async e => {
		const data = {
			kihon: kihon,
			kata: kata,
			kumite: kumite,
		};
		e.preventDefault();
		const response = await fetch(`/api/progress/${user.id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		console.log(result);
	};

	return (
		<Flex>
			<NavBar categories={categories} />
			{session ? (
				<Flex
					w="calc(100vw - 2vh - 60px)"
					h="98vh"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					pos="absolute"
					top="2vh"
					left="calc(60px + 2vh)">
					<Heading as="h1" fontSize={['1.5rem', '2rem']}>
						Progress Update
					</Heading>
					<Heading as="h2" fontSize={['1.1rem', '1.3rem']} m="2em 0 3em">
						What did you train today?
					</Heading>
					<Flex as="form" onSubmit={handleSubmit} flexDirection="column">
						<Flex mb={7}>
							<Checkbox onChange={() => setKihon(!kihon)} mr={3}>
								Kihon
							</Checkbox>
							<Checkbox onChange={() => setKata(!kata)} mr={3}>
								Kata
							</Checkbox>
							<Checkbox onChange={() => setKumite(!kumite)}>Kumite</Checkbox>
						</Flex>
						<Modal id={user.id} submitText={submitText} buttonText={buttonText}/>
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

export default progressUpdate;

export const getServerSideProps = async context => {
	const id = context.query.id;
	// Query
	const data1 = await knex.select().from('categories');
	const data2 = await knex('users').where('id', id).first();

	// Send results als props
	const categories = JSON.parse(JSON.stringify(data1));
	const user = JSON.parse(JSON.stringify(data2));
	// console.log(id);

	return {
		props: {
			categories,
			user,
		},
	};
};
