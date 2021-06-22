import React from 'react';
import NextLink from 'next/link';
import { Box, Divider, Flex, Heading, Link, Text } from '@chakra-ui/react';
import Auth from '../components/Auth';

const NotSignedIn = () => {
	return (
		<Flex
			as="main"
			w="calc(100vw - 2vh - 60px)"
			h="98vh"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			pos="absolute"
			top="2vh"
			left="calc(60px + 2vh)">
			<Heading>You're not signed in</Heading>
			<Box mt={10}>
				<Auth />
			</Box>
			<Flex w="30%" m={5} alignItems="center" justifyContent="center">
				<Divider w="30%" />
				<Text m={3}>OR</Text>
				<Divider w="30%" />
			</Flex>
			<NextLink href="/">
				<Link>Go back to Home</Link>
			</NextLink>
		</Flex>
	);
};

export default NotSignedIn;
