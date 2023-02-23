import React, { useState } from "react";
import {
  Box,
  Container ,
  VStack,
  Stack,
  Flex,
  Icon,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { FaTh, FaCartPlus, FaList, FaUserAlt,FaRegChartBar, FaBars } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoBagHandleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Adminsidebar = ({children}) => {
const [isOpen, setisOpen] = useState(false)
const toggle = ()=>setisOpen(!isOpen)

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: FaTh ,
    },
    {
      path: "/product",
      name: "Products",
      icon: BsFillHandbagFill,
    },
    {
      path: "/addproduct",
      name: "Add Products",
      icon: FaCartPlus ,
    },
    {
      path: "/categories",
      name: "Categories",
      icon: FaList ,
    },
    {
      path: "/order",
      name: "Orders",
      icon: IoBagHandleSharp,
    },
    {
      path: "/user",
      name: "Users",
      icon: FaUserAlt,
    },
  ];
  return (
    <Container>
      <Box
        minH="100Vh"
        width="300px"
        border="1px solid red"
        margin
        pl="5"
        pr="5"
      >
        <Stack>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            spacing="35px"
          >
            <Heading>Admin</Heading>
            <Box>
              <FaBars />
            </Box>
          </HStack>
        </Stack>
        <br />
        <Stack spacing={15}>
          {menuItem.map((item) => (
            <NavLink key={item.name} to={item.path}>
              <Box display="flex" alignItems="left" gap="15px">
                <Box>
                  {" "}
                  <Icon as={item.icon} boxSize={6} />
                </Box>
                <Box> {item.name}</Box>
              </Box>
            </NavLink>
          ))}
        </Stack>
      </Box>
      <main>{children}</main>
    </Container>
  );
};
export default Adminsidebar;
