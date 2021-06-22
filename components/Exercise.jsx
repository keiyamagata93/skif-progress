import {
	AspectRatio,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react';
import ReactPlayer from 'react-player/youtube';
import { slug } from '../helpers';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Exercise = ({ exercise }) => {
	return (
		<Flex
			as="main"
			w="calc(100vw - 2vh - 60px)"
			flexDirection="column"
			// align="center"
			pos="absolute"
			top="2vh"
			left="calc(60px + 2vh)"
			pb={30}
			pt={5}
			pl={['1em', '2em', '4em']}>
			<Breadcrumb mb={5} separator={<ChevronRightIcon color="gray.500" />}>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<BreadcrumbLink href={`/${slug(exercise.categorie)}`}>
						{exercise.categorie}
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">{exercise.exercise}</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Heading mb={10} color="teal.600">
				{exercise.exercise}
			</Heading>
			{exercise.description && <Text mb={10}>{exercise.description}</Text>}
			<AspectRatio ratio={16 / 9} w={['95%', '90%']}>
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
