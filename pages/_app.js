import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import { Provider } from 'next-auth/client';

const MyApp = ({ Component, pageProps }) => {
	const breakpoints = createBreakpoints({
		sm: '326px',
		md: '769px',
		lg: '961px',
		xl: '1200px',
	});

	const theme = extendTheme({ breakpoints });

	return (
		<Provider session={pageProps.session}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	);
};

export default MyApp;
