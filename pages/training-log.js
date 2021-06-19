import React, { useState } from 'react';
import { Box, Button, Checkbox, Flex } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import knex from '../knex';

const trainingLog = ({ categories, user }) => {
	const [kihon, setKihon] = useState(false);
	const [kata, setKata] = useState(false);
	const [kumite, setKumite] = useState(false);

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
		// console.log(result);
	};

	return (
		<Flex>
			<NavBar categories={categories} />
			<Box>
				<form onSubmit={handleSubmit}>
					<Checkbox onChange={e => setKihon(!kihon)}>Kihon</Checkbox>
					<Checkbox onChange={e => setKata(!kata)}>Kata</Checkbox>
					<Checkbox onChange={e => setKumite(!kumite)}>Kumite</Checkbox>
					<Button type="submit">Submit</Button>
				</form>
			</Box>
		</Flex>
	);
};

export default trainingLog;

export const getServerSideProps = async () => {
	// Query
	const data1 = await knex.select().from('categories');
	const data2 = await knex('users').where('email', 'kei.yamagata@me.com');

	// Send results als props
	const categories = JSON.parse(JSON.stringify(data1));
	const user = JSON.parse(JSON.stringify(data2));

	return {
		props: {
			categories,
			user,
		},
	};
};
