import React, { useState } from 'react';
import { Box, Button, Input, Select } from '@chakra-ui/react';

const SignUp = ({ user, levels }) => {
	const [name, setName] = useState('');
	const [level, setLevel] = useState(1);

	const handleSubmit = async e => {
		const data = {
			name: name,
			level_id: level,
			kihon: 0,
			kata: 0,
			kumite: 0,
		};
		e.preventDefault();
		const response = await fetch(`/api/user/${user.id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		// console.log(result);
	};

	return (
		<Box>
			<form onSubmit={handleSubmit}>
				<Input placeholder="Name" onChange={e => setName(e.target.value)} />
				<Select placeholder="Level" onChange={e => setLevel(e.target.value)}>
					{levels.map(level => (
						<option value={level.levelID}>{level.level}</option>
					))}
				</Select>
				<Button type="submit">Submit</Button>
			</form>
		</Box>
	);
};

export default SignUp;
