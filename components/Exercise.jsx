import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react';
import ReactPlayer from 'react-player/youtube';

const Exercise = ({ exercise }) => {
	return (
		<Box p={16} minW="80%" maxW="80%">
			<Heading mb={10}>{exercise.exercise}</Heading>
			<Text mb={10}>{exercise.description}</Text>
			<AspectRatio ratio={16 / 9}>
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${exercise.video_id}`}
					width="100%"
					height="100%"
					controls={true}
				/>
			</AspectRatio>
		</Box>
	);
};

export default Exercise;
