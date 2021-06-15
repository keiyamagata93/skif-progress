import Link from 'next/link';
import { Box, Heading } from '@chakra-ui/react';
import { slug } from '../helpers';

const ExercisesList = ({ exercises }) => {
	return (
		<Box p={16}>
			<Heading mb={10}>{exercises[0].categorie}</Heading>
			<Box as="ul" listStyleType="none" lineHeight="2rem">
				{exercises.map(ex => (
					<li key={ex.exerciseID}>
						<Link href={`/${slug(ex.categorie)}/${ex.exerciseID}/${slug(ex.exercise)}`}>
							<a>{ex.exercise}</a>
						</Link>
					</li>
				))}
			</Box>
		</Box>
	);
};

export default ExercisesList;
