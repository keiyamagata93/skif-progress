import React, { useState } from 'react';
import Link from 'next/link';
import { Box, IconButton, Flex, Text } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Auth from './Auth';
import { slug } from '../helpers';
import { AnimatePresence, motion } from 'framer-motion';

const NavBar = ({ categories }) => {
	const [isOpen, setIsOpen] = useState(false);

	const MotionFlex = motion(Flex);
	const MotionIconButton = motion(IconButton);

	const variants = {
		open: {
			width: '200px',
			height: '96vhvh',

			transition: {
				type: 'tween',
				duration: 0.3,
			},
		},
		closed: {
			width: '60px',
			height: '96vh',

			transition: {
				type: 'tween',
				duration: 0.3,
			},
		},
	};

	const container = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	// const item = {
	// 	hidden: { opacity: 0 },
	// 	show: { opacity: 1 },
	// };

	return (
		<MotionFlex
			as="nav"
			zIndex="10"
			bg="gray.100"
			flexDirection="column"
			justifyContent="flex-start"
			pos="sticky"
			top="0"
			left="2vh"
			h="96vh"
			marginTop="2vh"
			p="10px"
			boxShadow="xl"
			borderRadius="10px"
			variants={variants}
			animate={isOpen ? 'open' : 'closed'}
			initial={isOpen ? 'closed' : 'open'}>
			<MotionIconButton
				icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
				w="40px"
				onClick={e => setIsOpen(!isOpen)}
			/>
			<AnimatePresence>
				{isOpen && (
					<MotionFlex
						flexDirection="column"
						justifyContent="space-between"
						variants={container}
						initial={isOpen ? 'hidden' : 'show'}
						animate="show"
						exit="hidden"
						w="100%"
						h="100%">
						<MotionFlex
							as="ul"
							listStyleType="none"
							h="25vh"
							flexDirection="column"
							justifyContent="space-between"
							align="center"
							pl="8px"
							mt="50px">
							<li>
								<Text _active={{ background: 'gray.200' }}>
									<Link href="/">
										<a>Home</a>
									</Link>
								</Text>
							</li>
							{categories.map(cat => (
								<li key={cat.categorieID}>
									<Link href={`/${slug(cat.categorie)}`}>
										<a>{cat.categorie}</a>
									</Link>
								</li>
							))}
						</MotionFlex>
						<Auth />
					</MotionFlex>
				)}
			</AnimatePresence>
		</MotionFlex>
	);
};

export default NavBar;
