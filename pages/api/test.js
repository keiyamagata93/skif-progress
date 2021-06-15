import knex from '../../knex';

const test = async (req, res) => {
	const data = await knex('users').join('levels', 'users.level_id', 'levels.levelID');
	const cat = JSON.parse(JSON.stringify(data));
	// console.log(cat);

	res.status(200).json(cat);
};

export default test;
