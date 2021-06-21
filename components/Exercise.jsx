import { AspectRatio, Flex, Heading, Text } from '@chakra-ui/react';
import ReactPlayer from 'react-player/youtube';

const Exercise = ({ exercise }) => {
	return (
		<Flex
			as="main"
			w="calc(100vw - 2vh - 60px)"
			h="100vh"
			flexDirection="column"
			// align="center"
			pos="absolute"
			top="2vh"
			left="calc(60px + 2vh)"
			pl={5}>
			<Heading mb={10} color="teal.600">
				{exercise.exercise}
			</Heading>
			<Text mb={10}>{exercise.description}</Text>
			<AspectRatio ratio={16 / 9} w={['95%', '80%']}>
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${exercise.video_id}`}
					width="100%"
					height="100%"
					controls={true}
				/>
			</AspectRatio>
		</Flex>
	);
};

export default Exercise;
