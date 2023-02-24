import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {Grid,GridItem,Button,Box,Flex,Text,Checkbox} from "@chakra-ui/react"
import ProductCard from"../../Components/productcomponents/ProductCard"
const New = () => {
  const [data,setData]=useState([])
    useEffect(()=>{
         axios.get(`http://localhost:8080/items?category=new`)
        .then((response) =>setData(response.data))
        .catch((error) => console.log(error))
        
    },[])
  return (
    <Flex width={"90%"} justifyContent="space-between" margin="auto" >
      <Flex color="grey" flexDirection={"column"} >
        <Text>Price</Text>
        <Checkbox>$50-$100</Checkbox>
        <Checkbox>$100-$150</Checkbox>
        <Checkbox>$150-$200</Checkbox>
        <Checkbox>$200-$300</Checkbox>
        <Checkbox>$300-$500</Checkbox>
        <Checkbox>Above $500</Checkbox>
      </Flex>
      <Grid  width="70%" gap="10" templateColumns='repeat(3, 1fr)'>
        {data.map((el) =>(
          <GridItem key={el._id}>
            <ProductCard image={el.product_title_href} title={el.product_title} price={el.price}/>
          </GridItem>
        ))}
      </Grid>

    </Flex>
  )
}

export default New