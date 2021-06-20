import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import { Provider } from 'next-auth/client';

const MyApp = ({ Component, pageProps }) => {
	const breakpoints = createBreakpoints({
		sm: '325px',
		md: '768px',
		lg: '960px',
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
