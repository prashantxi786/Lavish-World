import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

const initialState = {
  title: "",
  price: "",
  stock: "",
  description: "",
  image_Url: "",
};

const AddProducts = () => {
  const [formData, setFormData] = useState(initialState);

const  HandleClick =()=> {
console.log(formData)
}
const HandleChange = (e) => {
  const data = e.target.value
  setFormData({...formData,[e.target.name]:data})
};


  const { title, price, stock, description, image_Url } = formData;
  return (
    <Box>
      <Heading as={"h2"} color="black" fontSize={{ base: "xl", md: "2xl" }}>
        Add Product
      </Heading>
      <Flex
        color="black"
        bg={useColorModeValue("gray.50", "gray.800")}
        align={"center"}
        justify={"center"}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"xl"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={2}
        >
          <Heading fontSize={{ base: "xl", md: "2xl" }}>
            Enter Product Details
          </Heading>
          <FormControl id="title" isRequired>
            <FormLabel>Product Title</FormLabel>
            <Input
              placeholder="Type Here"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={title}
              name="title"
              onChange={HandleChange}
            />
          </FormControl>
          <FormControl id="price" isRequired>
            <FormLabel>Price</FormLabel>
            <Input
              placeholder="Type Here"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={price}
              name="price"
              onChange={HandleChange}
            />
          </FormControl>
          <FormControl id="stock" isRequired>
            <FormLabel>Count in Stock</FormLabel>
            <Input
              placeholder="Type Here"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={stock}
              name="stock"
              onChange={HandleChange}
            />
          </FormControl>
          <FormControl id="Description" isRequired>
            <FormLabel>Description</FormLabel>
            <Input
              height={70}
              placeholder="Type Here"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={description}
              name="description"
              onChange={HandleChange}
            />
          </FormControl>
          <FormControl id="Images" isRequired>
            <FormLabel>Images</FormLabel>
            <Input
              placeholder="Type Here"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={image_Url}
              name="image_Url"
              onChange={HandleChange}
            />
          </FormControl>

          <Stack spacing={6}>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={HandleClick}
            >
              Publish Now
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};
export default AddProducts;
