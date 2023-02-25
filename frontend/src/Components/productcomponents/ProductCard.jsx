import React from 'react'
import {Image,Text,Flex,Button} from "@chakra-ui/react"
const ProductCard = ({image,price,title}) => {
  return (
    <Flex flexDirection={"column"}>
        <Image src={image} alt={title}/>
        <Text>{title}</Text>
        <Text fontWeight="600">${price}</Text>
        <Button>Add to Cart</Button>
    </Flex>
  )
}

export default ProductCard