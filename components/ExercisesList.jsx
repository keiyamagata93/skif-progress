import Link from 'next/link';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { slug } from '../helpers';

const ExercisesList = ({ exercises }) => {
	return (
		<Flex
			as="main"
			w="calc(100vw - 2vh - 60px)"
			flexDirection="column"
			// align="center"
			pos="absolute"
			top="2vh"
			left="calc(60px + 2vh)"
			p="1em"
			mb={10}>
			<Heading mb={10} color="teal.600">
				{exercises[0].categorie}
			</Heading>
			<Box as="ul" listStyleType="none" lineHeight="2rem">
				{exercises.map(ex => (
					<li key={ex.exerciseID}>
						<Link href={`/${slug(ex.categorie)}/${ex.exerciseID}/${slug(ex.exercise)}`}>
							<a>{ex.exercise}</a>
						</Link>
					</li>
				))}
			</Box>
		</Flex>
	);
};

export default ExercisesList;
