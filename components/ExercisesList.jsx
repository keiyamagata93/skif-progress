import NextLink from 'next/link';
import { AspectRatio, Box, Flex, Heading, Link } from '@chakra-ui/react';
import { slug } from '../helpers';
import ReactPlayer from 'react-player/youtube';

const ExercisesList = ({ exercises }) => {
	return (
		<Flex
			as="main"
			w="calc(100vw - 2vh - 60px)"
			pos="absolute"
			top="2vh"
			left="calc(60px + 2vh)"
			pl={['1em', '3em']}
			pt={5}>
			<Flex flexDir="column" w="100%">
				<Heading mb={10} color="teal.600">
					{exercises[0].categorie}
				</Heading>
				<AspectRatio ratio={16 / 9} w={['90%', '90%', '80%', '70%']} mb={10}>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=lLyuMcyAJ94&t=105s`}
						width="100%"
						height="100%"
						controls={true}
					/>
				</AspectRatio>
				<Box as="ul" listStyleType="none" lineHeight="2rem" mb={10}>
					{exercises.map(ex => (
						<li key={ex.exerciseID}>
							<NextLink
								href={`/${slug(ex.categorie)}/${ex.exerciseID}/${slug(
									ex.exercise
								)}`}>
								<Link>{ex.exercise}</Link>
							</NextLink>
						</li>
					))}
				</Box>
			</Flex>
		</Flex>
	);
};

export default ExercisesList;
