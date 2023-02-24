import React from 'react'
import {Image,Text,Flex} from "@chakra-ui/react"
const ProductCard = ({image,price,title}) => {
  return (
    <Flex flexDirection={"column"}>
        <Image src={image} alt={title}/>
        <Text>{title}</Text>
        <Text fontWeight="600">${price}</Text>
    </Flex>
  )
}

export default ProductCard