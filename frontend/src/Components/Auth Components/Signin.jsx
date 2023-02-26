
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Checkbox,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react'
  import { useDisclosure,useToast} from '@chakra-ui/react';
  import {useState } from "react"
  import style from "./Signin.module.css"
  import { BsPerson } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Signin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPassword, setShowPassword] = useState(false);
    const toast=useToast()
    console.log(style)
    let signupForm={
      email:"",
      password:""
    }
    const [form,setForm]=useState(signupForm);
    const handleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{

    }
  return (
    <>
      <Text  onClick={onOpen} 
              color={'white'}
              size="large"
         
              _hover={{
                color:"white",
                // bg: '#458B6A',
              }}><BsPerson   color={"#616161"} size={"25px"}/></Text>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        // motionPreset='slideInBottom'
        overflow="hidden"
      >
      <ModalOverlay />
      <ModalContent  >
      <ModalBody>
      <Flex
      minH={'30vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'white')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} bg="white">
        <Stack align={'center'}>
          <Heading id={style.font} fontSize={'3xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'white')}
          boxShadow={'lg'}
          p={8}
          >
          <Stack spacing={4}>
            <FormControl  >
              <FormLabel className={style.font}>Email address</FormLabel>
              <Input type="email" value={form.email} name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"  name="password" value={form.password} onChange={handleChange} />
            </FormControl>
            <Button
                bg={'#65c297'}
                color={'white'}
                _hover={{
                  bg: '#458B6A',
                }}
                onClick={handleSubmit}
                >
                Sign in
              </Button>
              <Box>
             <Text>
              Already have an account?
              </Text> 
            <NavLink
               to="/signUp"
                >
                <Button
                bg={'#65c297'}
                color={'white'}
                _hover={{
                  bg: '#458B6A',
                }}
                width="100%"
                >
                Sign Up
                </Button>
              </NavLink>
              </Box>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Signin;
