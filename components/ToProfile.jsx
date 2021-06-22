import React from 'react';
import NextLink from 'next/link';
import { Heading, Button } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const ToProfile = ({ user }) => {
	return (
		<>
			<Heading fontSize={['1.2rem', '1.4rem', '1.6rem', '1.8rem']} mb={10}>
				Hi, {user.name}! Welcome back.
			</Heading>
			<Button leftIcon={<ChevronRightIcon />} mb={10}>
				<NextLink href={`/user/${user.id}`}>
					<a>Progress</a>
				</NextLink>
			</Button>
		</>
	);
};

export default ToProfile;
