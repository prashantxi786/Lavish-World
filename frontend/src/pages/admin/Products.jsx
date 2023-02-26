import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Box, Input, Text, Heading, Select } from "@chakra-ui/react";
import { ProductCard } from "./ProductItem";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Components/admin/loader";
import { getData } from "../../Redux/Admin/admin.product.action";

const Products = () => {
  const [ProductCategory, setProductCategory] = useState("");

  const { data, isloader, iserror } = useSelector(
    (state) => state.Admin_Products_reducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  // useEffect(()=>{
  //   axios.get("https://good-gray-drill-hose.cyclic.app/items").then((res)=>setData(res.data));
  // },[])
  const handleCategories = (event) => {
    const val = event.target.value;
    console.log("category", val);
    setProductCategory(val);
  };


  if(isloader){
    console.log("loader true")
    return <Loader />
  }
  if(iserror){
    return "ERROR-----"
  }

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
        <Heading color="black">Products</Heading>
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
