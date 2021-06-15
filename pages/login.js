import React from 'react';
import { Flex, Input } from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';

const login = () => {
	const { control, handleSubmit } = useForm();

	const submit = data => console.log(data);

	return (
		<Flex w="100%" h="100vh" justifyContent="center" alignItems="center">
			<Flex
				w="30%"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				as="form"
				onSubmit={handleSubmit(submit)}>
				<Controller
					name="firstName"
					control={control}
					render={({ field }) => <Input {...field} />}
				/>
				<Input type="submit" w="30%" />
			</Flex>
		</Flex>
	);
};

export default login;
