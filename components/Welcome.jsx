import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import Auth from './Auth';

const Welcome = () => {
	return (
		<Flex alignItems="center" flexDir="column" mb={20} w={['100%']}>
			<Text textAlign="center" mb={10} w={['80%', '70%', '60%']}>
				Welcome to the Skif progress app! In this application you will be able to search an
				excercise you want to train by your own. It is also possible to keep your progress
				of your karate journey after creating an account.
			</Text>
			<Text textAlign="center" mb={5} w={['80%', '70%', '60%']}>
				You're not signed in. Please sign in from the link below to be able to save you
				progress.
			</Text>
			<Box>
				<Auth />
			</Box>
		</Flex>
	);
};

export default Welcome;
