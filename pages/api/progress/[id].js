import knex from '../../../knex';

const progressHandler = async (req, res) => {
	if (req.method === 'GET') {
		const progress = await knex('users').where('id', req.query.id);
		res.json(progress);
	}

	if (req.method === 'PUT') {
		// Get id from query
		const id = req.query.id;
		// console.log(id);

		// Get user with id
		// const result = await knex('users').where('id', id);
		const data = req.body; // => {kihon: true, kata: true, kumite: false,}
		const keys = Object.keys(data); // ['kihon', 'kata', 'kumite']
		const values = Object.values(data); // [true, true, false]
		const promises = [];
		values.forEach((value, i) => {
			if (value) {
				promises.push(knex('users').where('id', '=', id).increment(keys[i], 1)); // where the value is true gets incremented by 1
			}
		});
		await Promise.all(promises);

		res.json({ finished: 'OK' });
	}
};

export default progressHandler;
