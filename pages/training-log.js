import React, { useState } from 'react';
import { Box, Checkbox, Flex, Heading, Input, Select } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import knex from '../knex';

const trainingLog = ({ categories, exercises }) => {
	// const [catID, setCatID] = useState('1');
	const handleChange = data => console.log(data);

	return (
		<Flex>
			<NavBar categories={categories} />
			<form>
				<Box p={16}>
					<Heading mb={10}>Training Log</Heading>
					<Flex>
						<Select
							w="200px"
							mb={10}
							onChange={handleChange()}
							placeholder="Select categorie">
							<option value="1">Kihon</option>
							<option value="2">Kata</option>
							<option value="3">Kumite</option>
						</Select>
						<Select
							w="200px"
							mb={10}
							onChange={e => setCatID(e.target.value)}
							placeholder="Select level"></Select>
					</Flex>
					<Flex flexDir="column">
						{
							exercises.map(ex => (
								<Checkbox key={ex.exerciseID}>{ex.exercise}</Checkbox>
							))
							// .filter(ex => ex.categories_id === catID)
						}
					</Flex>

					<Input type="submit" value="Submit" />
				</Box>
			</form>
		</Flex>
	);
};

export default trainingLog;

export const getServerSideProps = async () => {
	// Query
	const data1 = await knex.select().from('categories');
	const data2 = await knex
		.select('exerciseID', 'exercise', 'categories_id', 'levels_id')
		.from('exercises');

	// Send results als props
	const categories = JSON.parse(JSON.stringify(data1));
	const exercises = JSON.parse(JSON.stringify(data2));

	return {
		props: {
			categories,
			exercises,
		},
	};
};
