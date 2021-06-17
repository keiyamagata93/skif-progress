import React, { useState } from 'react';
import { Button, Checkbox } from '@chakra-ui/react';

const test = () => {
	const [kihon, setKihon] = useState(false);
	const [kata, setKata] = useState(false);
	const [kumite, setKumite] = useState(false);

	const handleSubmit = async e => {
		const data = {
			kihon: kihon,
			kata: kata,
			kumite: kumite,
		};
		e.preventDefault();
		const response = await fetch('/api/progress/1', {
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
			<form onSubmit={handleSubmit}>
				<Checkbox onChange={e => setKihon(!kihon)}>Kihon</Checkbox>
				<Checkbox onChange={e => setKata(!kata)}>Kata</Checkbox>
				<Checkbox onChange={e => setKumite(!kumite)}>Kumite</Checkbox>
				<Button type="submit">Button</Button>
			</form>
			<p>kihon: {kihon ? 'true' : 'false'}</p>
			<p>kata: {kata ? 'true' : 'false'}</p>
			<p>kumite: {kumite ? 'true' : 'false'}</p>
		</>
	);
};

export default test;
