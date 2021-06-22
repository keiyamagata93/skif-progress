import React, { useState } from 'react';
import NextLink from 'next/link';
import { Box, IconButton, Flex, Text } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Auth from './Auth';
import { slug } from '../helpers';

const NavBar = ({ categories }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const hide = () => setIsOpen(false);
	const show = () => setIsOpen(true);

	return (
		<Flex
			as="nav"
			zIndex="10"
			bg="gray.100"
			flexDirection="column"
			// justifyContent="flex-end"
			pos="fixed"
			top="2vh"
			left="2vh"
			w={isOpen ? '200px' : '60px'}
			h="96vh"
			p="10px"
			boxShadow="xl"
			borderRadius="10px">
			<IconButton
				icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
				w="40px"
				onClick={toggle}
			/>
			<Flex
				flexDirection="column"
				justifyContent="space-between"
				display={isOpen ? 'flex' : 'none'}
				w="100%"
				h="100%">
				<Flex
					as="ul"
					listStyleType="none"
					h="25vh"
					flexDirection="column"
					justifyContent="space-between"
					align="center"
					pl="8px"
					mt={10}>
					<li>
						<NextLink href="/">
							<Text>Home</Text>
						</NextLink>
					</li>
					{categories.map(cat => (
						<li key={cat.categorieID}>
							<NextLink href={`/${slug(cat.categorie)}`}>
								<a onClick={toggle} onBlur={hide} onFocus={show}>
									{cat.categorie}
								</a>
							</NextLink>
						</li>
					))}
				</Flex>
				<Box mb={10}>
					<Auth />
				</Box>
			</Flex>
		</Flex>
	);
};

export default NavBar;
