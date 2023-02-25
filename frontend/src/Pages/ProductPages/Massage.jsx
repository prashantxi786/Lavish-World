import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { url } from './url'
import {Grid,GridItem,Input,Button,Box,Flex,Text,Checkbox,CheckboxGroup} from "@chakra-ui/react"
import ProductCard from"../../Components/productcomponents/ProductCard"
const New = () => {
  const [data,setData]=useState([])
  const [min,setMin]=useState("")
  const [max,setMax]=useState("")
    useEffect(()=>{
         axios.get(`${url}items?category=massage&min=${min}&max=${max}`)
        .then((response) =>setData(response.data))
        .catch((error) => console.log(error))
        
    },[min,max])
    const sort=(val)=>{
      axios.get(`${url}items?category=massage&price=${val}`)
      .then((response) =>setData(response.data))
      .catch((error) => console.log(error))
    }
    const sortbyalphabet=(alpha)=>{
      axios.get(`${url}items?category=massage&title=${alpha}`)
      .then((response) =>setData(response.data))
      .catch((error) => console.log(error))
    }
    
  return (
    <Flex width={"90%"} justifyContent="space-between" margin="auto" >
      <Flex width="20%" gap="5" align="flex-start"  color="grey" flexDirection={"column"} >
        <select style={{width:"100%"}} onChange={(e)=>sort(e.target.value)}>
          <option>Filter by price</option>
          <option value="htl">High to low</option>
          <option value="lth">low to high</option>
        </select>
        <select style={{width:"100%"}} onChange={(e)=>sortbyalphabet(e.target.value)}>
          <option>Filter by Alphabet</option>
          <option value="atoz">Alphabet A to Z</option>
          <option value="ztoa">Alphabet Z to A</option>
        </select>
        
        <form>
        <p>Price Range</p>
        <Input onChange={(e)=>setMin(e.target.value)}  type="text"  placeholder='min'/>
        <Input onChange={(e)=>setMax(e.target.value) }  type="text" placeholder='max'/>
        </form>
      </Flex>
      <Grid  width="70%" gap="10" templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)",}}>
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