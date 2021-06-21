import { Flex } from '@chakra-ui/react';
import Navbar from '../components/NavBar';
import Exercise from '../components/Exercise';
import knex from '../knex';

const exercise = ({ categories, exercise }) => {
	return (
		<Flex>
			<Navbar categories={categories} />
			<Exercise exercise={exercise} />
		</Flex>
	);
};

export default exercise;

export const getServerSideProps = async context => {
	// Select id from context
	const id = context.params.exercise[1];

	// Query
	const data1 = await knex('categories');
	const data2 = await knex('exercises').where('exerciseID', parseInt(id)).first();

	// Send result as props
	const categories = JSON.parse(JSON.stringify(data1));
	const exercise = JSON.parse(JSON.stringify(data2));

	return {
		props: {
			categories,
			exercise,
		},
	};
};
