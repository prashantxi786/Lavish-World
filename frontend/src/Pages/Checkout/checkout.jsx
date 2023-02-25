import { Box, Text, Input, RadioGroup, Radio, Stack,Select,Button } from '@chakra-ui/react';
import React from 'react';

const Checkout = () => {
    const [value, setValue] = React.useState('1')
    const [val,setVal]=React.useState()
    const change=(i)=>{
        if(i<10){
            return `0${i}`
        }
        return i
    }
  return (
    <Box display={"flex"} mt="100px" w="85%" justifyContent={"space-around"} m="auto">
        <Box flex={0.6} px="80px" py="50px" >
            <Box display={"flex"} flexDir="column" gap="10px">
                <Text fontSize={"20px"} mb="20px" fontWeight={600}>Shipping Information</Text>
                <Box display={"flex"} flexDir="column" gap="20px" mb="40px">
                    <Box>
                        <Text>Full Name</Text>
                        <Input placeholder={"Your first and last name"}></Input>
                    </Box>
                    <Box>
                        <Text>Street address</Text>
                        <Input placeholder='123 Example Street'></Input>
                    </Box>
                    <Box display={"flex"} flexDir="column" gap="20px" mb="10px">
                        <Box>
                            <Text>Zip Code</Text>
                            <Input placeholder="Zip Code"></Input>
                        </Box>
                        <Box>
                            <Text>City</Text>
                            <Input placeholder="City"></Input>
                        </Box>
                    </Box>
                    <Box>
                        <Text>Email Address</Text>
                        <Input placeholder="you@example.com"></Input>
                    </Box>
                </Box>
                <Box display="flex" gap="20px" flexDir={"column"} mb="20px">
                    <Box>
                        <Text fontWeight={500}>Shipping Method</Text>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction='row' display={"flex"} flexDir="row">
                                <Radio value='1' flex={0.5}><Box><Text>Express <b>$14.99</b></Text><Text>Dispatched in 24 hours</Text></Box></Radio>
                                <Radio value='2' flex={0.5}><Box><Text>Standard <b>$4.99</b></Text><Text>Dispatched in 1-2 days</Text></Box></Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box>
                        <Text fontWeight={500}>Payment Information </Text>
                        <RadioGroup onChange={setVal} value={val}>
                            <Stack direction='row' display={"flex"} flexDir="row">
                                <Radio value='1' flex={0.5}><Box><Text fontWeight={"600"}>Credit Card</Text><Text>Pay with credit card via Stripe</Text></Box></Radio>
                                <Radio value='2' flex={0.5}><Box><Text fontWeight={"600"}>PayPal </Text><Text>Pay with your PayPal account</Text></Box></Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </Box>
                    <Box display={"flex"} flexDir="row" gap="20px">
                        <Box flex={0.5}>
                            <Text>Credit card number</Text>
                            <Input placeholder='Card Number'></Input>
                        </Box>
                        <Box flex={0.5}>
                            <Text>Name on card</Text>
                            <Input placeholder='Card Name'></Input>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDir="row" gap="20px" mb="20px">
                        <Box display={"flex"} flexDir="column" flex={0.5}>
                            <Text>Expiry date</Text>
                            <Box display="flex" flexDir={"row"} gap="10px">
                                <Select>
                                    {new Array(12).fill(1).map((el,i)=>(
                                        <option value={`option${change(i+1)}`}>{change(i+1)}</option>
                                        ))}
                                </Select>
                                <Select>
                                    {new Array(10).fill(1).map((el,i)=>(
                                        <option value={`option${i+2022}`}>{i+2022}</option>
                                        ))}
                                </Select>
                            </Box>
                            </Box>
                            <Box flex={0.5}>
                                <Box>
                                    <Text>CVV/CVC</Text>
                                    <Input placeholder={"CVC"} maxLength="3"></Input>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
        </Box>
        <Box flex={0.4} bg="#f7fafc" px="50px" py="50px">
            <Text fontSize={"20px"} fontWeight="600" mb="20px">Order Summary</Text>
                <Box></Box>
                <Box display={"flex"} flexDir="row" justifyContent={"space-between"}>
                    <Input bg="white" placeholder='Discount Code' flex={0.7}></Input>
                    <Button flex={0.2}>Apply</Button>
                </Box>
            </Box>
    </Box>
  )
}

export default Checkout;
