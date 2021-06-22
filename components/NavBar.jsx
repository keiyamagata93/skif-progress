import React, { useState } from 'react';
import Link from 'next/link';
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
			justifyContent="flex-start"
			pos="fixed"
			top="0"
			left="2vh"
			w={isOpen ? '200px' : '60px'}
			h="96vh"
			marginTop="2vh"
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
						<Text>
							<Link href="/">
								<a>Home</a>
							</Link>
						</Text>
					</li>
					{categories.map(cat => (
						<li key={cat.categorieID}>
							<Link href={`/${slug(cat.categorie)}`}>
								<a onClick={toggle} onBlur={hide} onFocus={show}>
									{cat.categorie}
								</a>
							</Link>
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
