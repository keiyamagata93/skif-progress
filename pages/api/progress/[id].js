import knex from '../../../knex';

const progressHandler = async (req, res) => {
	const progress = await knex('users')
		.join('progress', 'users.progress_id', 'progress.ProgressID')
		.where('users.progress_id', req.query.id);

	res.json(progress);
};

export default progressHandler;
