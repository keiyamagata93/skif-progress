import Link from 'next/link';
import { Flex } from '@chakra-ui/react';
import Auth from './Auth';
import { slug } from '../helpers';

const NavBar = ({ categories }) => {
	return (
		<Flex
			as="nav"
			bg="grey"
			w="12em"
			h="100vh"
			p="100px 0"
			flexDirection="column"
			justifyContent="space-between"
			alignItems="center"
			position="sticky"
			top="0"
			left="0">
			<Flex
				as="ul"
				listStyleType="none"
				h="20vh"
				flexDirection="column"
				justifyContent="space-between"
				alignItems="center">
				<li>
					<Link href="/">
						<a>Progress</a>
					</Link>
				</li>
				{categories.map(cat => (
					<li key={cat.categorieID}>
						<Link href={`/${slug(cat.categorie)}`}>
							<a>{cat.categorie}</a>
						</Link>
					</li>
				))}
			</Flex>
			<Auth />
		</Flex>
	);
};

export default NavBar;
