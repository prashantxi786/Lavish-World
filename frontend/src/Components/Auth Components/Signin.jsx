
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

const Signin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPassword, setShowPassword] = useState(false);
    const toast=useToast()
    console.log(style)
    let signupForm={
      firstname:"",
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
      <Button  onClick={onOpen} 
              fontSize={'sm'}
              fontWeight={400}
              color={'white'}
              bg={'#65c297'}
              href={'#'}
              _hover={{
                bg: '#458B6A',
              }}>Login/Signin</Button>
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
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={2} px={6}>
        <Stack align={'center'}>
          <Heading id={style.font} fontSize={'3xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
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
