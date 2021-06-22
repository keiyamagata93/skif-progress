import React, { useState } from 'react';
import { Box, Button, Input, Select, Text } from '@chakra-ui/react';
import Modal from '../components/Modal';

const SignUp = ({ user, levels }) => {
	const [name, setName] = useState('');
	const [level, setLevel] = useState(1);
	const buttonText = 'Go';
	const submitText = 'Submit';

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
		console.log(result);
	};

	return (
		<>
			<Text textAlign="center">
				Thank you for using the SKIF Progress App! <br />
				It seems like you don't have an account yet. Register here.
			</Text>
			<Box as="form" onSubmit={handleSubmit} mt={10} mb={10}>
				<Text mb={1} textAlign="center">
					Name
				</Text>
				<Input
					onChange={e => setName(e.target.value)}
					isRequired={user.name === null}
					textAlign="center"
				/>
				<Text mt={5} mb={1} textAlign="center">
					Level
				</Text>
				<Select onChange={e => setLevel(e.target.value)} mb={5}>
					{levels.map(level => (
						<option value={level.levelID}>{level.level}</option>
					))}
				</Select>
				{/* <Button type="submit">Submit</Button> */}
				<Modal id={user.id} buttonText={buttonText} submitText={submitText} />
			</Box>
		</>
	);
};

export default SignUp;
