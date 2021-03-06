import { Flex } from '@chakra-ui/react';
import Navbar from '../components/NavBar';
import ExercisesList from '../components/ExercisesList';
import knex from '../knex';

const list = ({ categories, exercises }) => {
	return (
		<Flex>
			<Navbar categories={categories} />
			<ExercisesList exercises={exercises} />
		</Flex>
	);
};

export default list;

export const getServerSideProps = async context => {
	const categorieName = context.params.list;
	// Query
	const data1 = await knex('categories');
	const data2 = await knex('exercises')
		.join('categories', 'exercises.categories_id', 'categories.categorieID')
		.where('categories.categorie', categorieName);
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
