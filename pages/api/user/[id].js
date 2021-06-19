import knex from '../../../knex';

const userHandler = async (req, res) => {
	if (req.method === 'PUT') {
		// Get id from query
		const id = req.query.id;

		// Collect data to update
		const data = req.body; // => { name: '...' }

		// Connect to db and update
		await knex('users').where('id', id).update(data);

		res.json({ Updated: 'OK' });
	}
};

export default userHandler;
