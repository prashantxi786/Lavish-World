import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Box, Input, Text, Heading, Select } from "@chakra-ui/react";
import { ProductCard } from "./ProductItem";
//import { useSelector, useDispatch } from "react-redux";

const data = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/7840_DEEP_ROSE_3_800x.jpg?v=1593707009",
    price: "$259.00",
    category: "LELO",
    desc: "",
    ratings: 4,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/1812_Black_1_200x.jpg?v=1601585235",
    price: "$259.00",
    category: "LELO",
    desc: "",
    ratings: 4,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/7840_DEEP_ROSE_3_800x.jpg?v=1593707009",
    price: "$259.00",
    category: "LELO",
    desc: "",
    ratings: 4,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/7840_DEEP_ROSE_3_800x.jpg?v=1593707009",
    price: "$259.00",
    category: "LELO",
    desc: "",
    ratings: 4,
  },
];

const Products = () => {
 const [ProductCategory, setProductCategory] = useState("");

  //  const { data, isloader,iserror } = useSelector((state) => state.Admin_Products_reducer);
  ////  const dispatch = useDispatch();

    const handleCategories=(event)=>{
        const val = event.target.value;
   console.log("category",val);
   setProductCategory(val);

    }
// useEffect(() => {
//   dispatch(getData(ProductCategory));
// }, [ProductCategory]);
 
// if(isloader){
//   console.log("loader true")
//   return <Loader />
// }
// if(iserror){
//   return "ERROR-----"
// }

  return (
    <>
      <Box
        color={"white"}
        minH={"100vh"}
        mt={{ base: "60px", md: "0px" }}
        padding={"20px"}
        // bg={"#0c0e1f"}
        // w={{ base: "100%", md: "71%", lg: "81.61%" }}
        // ml={{ base: "0%", md: "29%", lg: "18.39%" }}
      >
        <Heading>Products</Heading>
        <Text color={"#00b5b8"}>List of Products</Text>

        <Box mt={"30px"} w={"100%"}>
          <Box display={"flex"} justifyContent={"space-between"} mb={"20px"}>
            {/* input search */}
            <Input
              type={"text"}
              placeholder="Search Listings.."
              w={{ base: "40%", md: "35%", lg: "25%" }}
            ></Input>
            {/* select option */}
            <Select
              // variant="flushed"
              bg="#0c0e1f"
              w={{ base: "45%", md: "25%", lg: "20%" }}
              cursor={"pointer"}
              value={ProductCategory}
              onChange={handleCategories}
            >
              Categories
              <option style={{ backgroundColor: "#0c0e1f" }}>Sleep</option>
              <option style={{ backgroundColor: "#0c0e1f" }} value="new">
                New
              </option>
              <option style={{ backgroundColor: "#0c0e1f" }} value="Massage">
                Massage
              </option>
              <option style={{ backgroundColor: "#0c0e1f" }} value="Wellness">
                Wellness
              </option>
            </Select>
          </Box>
          <SimpleGrid
            zIndex={0}
            columns={{ base: 1, md: 3, lg: 4 }}
            columnGap={{
              base: "4",
              md: "6",
            }}
            rowGap={{
              base: "8",
              md: "10",
            }}
          >
            {data.length &&
              data.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};


export default Products;
