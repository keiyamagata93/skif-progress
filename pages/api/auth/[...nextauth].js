import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { slug } from '../../../helpers';

const options = {
	// Configure one or more authentication providers
	providers: [
		Providers.Email({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: process.env.EMAIL_SERVER_PORT,
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD,
				},
			},
			from: process.env.EMAIL_FROM,
		}),
		Providers.Facebook({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
		}),
		Providers.Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
	callbacks: {
		/**
		 * @param  {string} url      URL provided as callback URL by the client
		 * @param  {string} baseUrl  Default base URL of site (can be used as fallback)
		 * @return {string}          URL the client will be redirect to
		 */
		async redirect(url, baseUrl) {
			return url.startsWith(baseUrl) ? url : baseUrl;
		},
		signIn(user, account, profile) {
			user.name = slug(user.email.slice(0, user.email.indexOf('@'))); // or whatever else

			return true;
		},
	},

	debug: true,
};

export default (req, res) => NextAuth(req, res, options);
