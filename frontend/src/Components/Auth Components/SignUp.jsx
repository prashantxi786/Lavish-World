import React from 'react';
import {Box,Heading, Input,Button, Text} from "@chakra-ui/react"
import style from "./Signin.module.css"
import { useState } from 'react';
import axios from "axios"
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Auth/auth.product.action';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Oval } from  'react-loader-spinner'
const SignUp = () => {
  const dispatch=useDispatch()
  const store=useSelector(store=>store.auth)
  let ref = React.useRef(null);
  let obj={
    name:"",
    gender:"",
    email:"",
    password:""
  }
  const navigate=useNavigate()
  React.useEffect(() => {
    if(store.token!=""){
      navigate("/")
    }
  }, [store.token]);
 
  const [state,setState]=useState(obj)
  const handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  const handleSubmit=async()=>{
    if(state.name!=="" && state.gender!=="" && state.email!=="" && state.password!==""){
      dispatch(register(state))
  
    }else{
      console.log("fill all the detaiils")
    }
  }
  return (

    <Box textAlign={"center"} py="50px">

      <Heading id={style.font}>
        Registeration
      </Heading>
      {store.isloader?(<Box display={"flex"} justifyContent="center" h="600px" alignItems={"center"}><Oval
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
/></Box>):<>
      <Box textAlign={"left"} margin="auto" w="50%" display={"flex"} flexDir="column" gap="20px" mt="50px">
        <Box >
          <Text fontSize={"20px"} textAlign={"center"}>Create customer</Text>
          <Text>Our brand new site is live. Please create a new account to explore this experience. Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</Text>
        </Box>
        <Box>
          <Text>First Name</Text>
          <Input placeholder='Name' name="name" value={state.name} onChange={handleChange}></Input>
        </Box>
        <Box>
          <Text>Gender</Text>
          <Input placeholder='Gender' name="gender" value={state.gender} onChange={handleChange}></Input>
        </Box>
        <Box>
          <Text>Email</Text>
          <Input placeholder='Email' type="email" name="email" value={state.email} onChange={handleChange}></Input>
        </Box>
        <Box>
          <Text>Password</Text>
          <Input placeholder='Password'type="password" name="password" value={state.password} onChange={handleChange}>
            {/* <Text>a</Text> */}
            </Input>
        </Box>
        <Button    bg={'#65c297'}
                color={'white'}
                letterSpacing="8px"
                _hover={{
                  bg: '#458B6A',
                }}
                onClick={handleSubmit} 
                >SUBMIT</Button>
      </Box></>}
    </Box>
  );
}

export default SignUp
