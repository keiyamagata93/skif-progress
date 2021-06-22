import { useRouter } from 'next/router';
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalCloseButton,
	useDisclosure,
} from '@chakra-ui/react';

const BasicModal = ({ id, buttonText, submitText }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();
	return (
		<>
			<Button type="submit" onClick={onOpen} w='100%'>
				{submitText}
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader m="0 auto">Update complete</ModalHeader>
					<ModalFooter m="0 auto">
						<Button
							colorScheme="teal"
							mr={3}
							onClick={() => router.push(`/user/${id}`)}>
							{buttonText} to profile
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default BasicModal;
