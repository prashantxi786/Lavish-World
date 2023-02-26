import React from 'react'
import {Image,Text,Flex,Button} from "@chakra-ui/react"
import styles from "./prodcard.module.css"
const ProductCard = ({image,price,title}) => {
  return (
    <Flex flexDirection={"column"}>
        <Image className={styles.img} src={image} alt={title}/>
        <Text>{title}</Text>
        <Text fontWeight="600">${price}</Text>
        <Button className={styles.button}>Add to Cart</Button>
    </Flex>
  )
}

export default ProductCard