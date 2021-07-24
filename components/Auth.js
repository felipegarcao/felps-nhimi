import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Heading,
  ModalOverlay,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import useAuth from 'src/hooks/useAuth';

const AuthModal = ({ isOpen, onClose }) => {
  const { signinGitHub, signinGoogle } = useAuth();

  const handleSigninGithub = () => {
    onClose();
    signinGitHub();
  };

  const handleSigninGoogle = () => {
    onClose();
    signinGoogle();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent borderRadius={4}>
        <ModalCloseButton />
        <ModalBody>
          <Flex align="center" direction="column" justify="center" minH="250px">
            <Heading fontSize="xl" textAlign="center" mb={3}>
              Login gratuito!
            </Heading>
            <Text fontSize="md" textAlign="center" mb={5}>
              Para continuar o acesso, faço o login utilizando algum dos
              serviços abaixo:
            </Text>
            <Button
              onClick={() => handleSigninGoogle()}
              backgroundColor="white"
              color="gray.900"
              variant="outline"
              fontWeight="medium"
              // leftIcon="google"
              mt={4}
              _hover={{ bg: 'gray.100' }}
              _active={{
                bg: 'gray.100',
                transform: 'scale(0.95)',
              }}
            >
              Continuar com Google
            </Button>
            <Button
              onClick={() => handleSigninGithub()}
              backgroundColor="white"
              color="gray.900"
              variant="outline"
              fontWeight="medium"
              // leftIcon="google"
              mt={4}
              _hover={{ bg: 'gray.100' }}
              _active={{
                bg: 'gray.100',
                transform: 'scale(0.95)',
              }}
            >
              Continuar com Github
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

const withAuthModal = (Component) => (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AuthModal isOpen={isOpen} onClose={onClose}/>
      <Component openAuthModal={onOpen} {...props}/>
    </>
  )
}

export default withAuthModal;