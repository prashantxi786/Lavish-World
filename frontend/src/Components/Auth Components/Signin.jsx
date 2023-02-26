import React from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Auth/auth.product.action';
import { logout } from '../../Redux/Auth/auth.product.action';
import { Oval } from 'react-loader-spinner';

const Signin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPassword, setShowPassword] = useState(false);
    const [s,ss]=useState(false)
    const dispatch=useDispatch()
    const store=useSelector(store=>store.auth)
    const toast=useToast()

    React.useEffect(() => {
      
        if(store.token==""){
          console.log("sfa")
        }
      
    }, [s]);

    let signupForm={
      email:"",
      password:""
    }
    const [form,setForm]=useState(signupForm);
    const handleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
      dispatch(login(form))
      setForm(signupForm)
    }
    console.log(store)
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
          <Heading id={style.font} fontSize={'3xl'}>{store.name!==""?(`Signed in as ${store.name}`):"Sign in your account"}</Heading>
        </Stack>
        {store.isloader?(<Box display={"flex"} justifyContent="center" h="200px" alignItems={"center"}><Oval
  height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}
/></Box>):<Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'white')}
          boxShadow={'lg'}
          p={8}
          >
          <Stack spacing={4}>
            {store.token==""?(<>
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
            </>):<Button bg={'#65c297'}
                color={'white'}
                _hover={{
                  bg: '#458B6A',
                }}
                width="100%" onClick={()=>dispatch(logout)}>Logout</Button>}
          </Stack>
        </Box>}
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
