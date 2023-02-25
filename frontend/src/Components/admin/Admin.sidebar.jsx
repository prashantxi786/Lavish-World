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
import { NavLink, useNavigate } from "react-router-dom";


const Adminsidebar = ({children}) => {
const [isOpen, setisOpen] = useState(true)
const navigate = useNavigate();
const toggle = ()=>setisOpen(!isOpen)

  const menuItem = [
    {
      path: "/admin",
      name: "Dashboard",
      icon: FaTh,
    },
    {
      path: "/admin/product",
      name: "Products",
      icon: BsFillHandbagFill,
    },
    {
      path: "/admin/addproduct",
      name: "Add Products",
      icon: FaCartPlus,
    },
    {
      path: "/admin/categories",
      name: "Categories",
      icon: FaList,
    },
    {
      path: "/admin/order",
      name: "Orders",
      icon: IoBagHandleSharp,
    },
    {
      path: "/admin/user",
      name: "Users",
      icon: FaUserAlt,
    },
  ];
  return (
    <Box
      font-display="auto"
      style={{
        display: "flex",
        width: "100%",
        border: "1px solid blue",
        color: "white",
      }}
    >
      <Box
        bgColor={"blue"}
        zIndex={2}
        minH="100Vh"
        maxW={isOpen ? "250px" : "50px"}
        border="1px solid red"
        margin
        pl={"5"}
        pr={isOpen ? "5" : "10"}
        position="static"
        alignItems={"center"}
      >
        <Stack>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            spacing={isOpen ? "30px" : "none"}
          >
            <Heading
              display={{
                base: isOpen ? "none" : "block",
                lg: isOpen ? "block" : "none",
              }}
              onClick={() => <navigate to={"/admin"} />}
            >
              Admin
            </Heading>
            <Box pl={[0,0,5]}>
              <FaBars onClick={toggle} fontSize="30px" />
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
                <Box
                  display={{
                    base: isOpen ? "none" : "block",
                    lg: isOpen ? "block" : "none",
                  }}
                >
                  {" "}
                  {item.name}
                </Box>
              </Box>
            </NavLink>
          ))}
        </Stack>
      </Box>
      <Box border="1px solid red" flex={1}>
        {children}
      </Box>
    </Box>
  );
};
export default Adminsidebar;
