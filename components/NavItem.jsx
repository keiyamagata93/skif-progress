import React from 'react';
import NextLink from 'next/link';
import { Link, Flex, Icon, Menu, MenuButton, Text } from '@chakra-ui/react';

const NavItem = ({ size, icon, kanji, categorie, active }) => {
	return (
		<Flex mt={30} flexDir="column" w="100%" alignItems="flex-start">
			<Menu>
				<Link
					bg={active && 'teal'}
					p={3}
					borderRadius={8}
					_hover={{ textDecor: 'none', bg: 'teal.400' }}
					w={size && '100%'}>
					<NextLink href="/">
						<MenuButton>
							<Flex>
								{icon ? (
									<Icon
										as={icon}
										fontSize="xl"
										color="gray.500"
										display={size && 'flex'}
									/>
								) : null}
								<Text fontSize="xl" color="gray.500">
									{kanji}
								</Text>
								<Text ml={5} display={size ? 'none' : 'flex'}>
									{categorie}
								</Text>
							</Flex>
						</MenuButton>
					</NextLink>
				</Link>
			</Menu>
		</Flex>
	);
};

export default NavItem;
