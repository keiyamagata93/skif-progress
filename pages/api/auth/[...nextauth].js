import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		Providers.Facebook({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
		}),
	],
	database: {
		type: 'mysql',
		host: process.env.DB_HOST,
		port: 3306,
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
	},
});
