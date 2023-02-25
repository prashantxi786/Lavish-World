import React from "react";
import Logo from "../../assets/lavish_world_logo.png";
import styles from "../Navbar/Navbar.module.css";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi"

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const SmallNavbar = () => {
  return (
    <div>
      <Flex
        minWidth="max-content"
        bg={"#ffffff"}
        alignItems="center"
        shadow={"base"}
        justifyContent={"space-between"}
        p="10px"
        
      >
        <Box  p="2" display={"flex"} justifyContent="center">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList fontSize={"14px"}>
              <MenuItem>
                <a href={"#"}>Massage</a>
              </MenuItem>
              <MenuItem>
                <a href={"#"}>Wellness</a>
              </MenuItem>
              <MenuItem>
                <a href={"#"}>Men</a>
              </MenuItem>
              <MenuItem>
                <a href={"#"}>Sleep</a>
              </MenuItem>
              <MenuItem>
                <a href={"#"}>Home </a>
              </MenuItem>
              <MenuItem>
                <a href={"#"}>Fitness</a>
              </MenuItem>
              <MenuItem>
                <a href={"#"}>Outdoor</a>
              </MenuItem>
              <MenuItem>
                <a href={"#"}>Travel</a>
              </MenuItem>
              <MenuItem>
                <a href={"#"}>Accessories</a>
              </MenuItem>
              <MenuItem>
                <a href={"#"}>Entertainment</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Image
          width="120px"
          height="40px" R
          marginLeft="30px"
          objectFit="cover"
          src={Logo}
        />
        <Box paddingRight="13px">
          <Flex gap="10px" >
            <a href={"#"}>
              <BsPerson className={styles.carticons} />
            </a>

            <a href={"#"}>
              <FiHeart className={styles.carticons} />
            </a>

            <a href={"#"}>
              <button
                style={{
                  position: "relative",
                  borderRadius: "5px",
                  color: "#fff",
                  top: '-3px',
                  width: "38px",
                  height: "35px",
                  margin: "auto",
                  backgroundColor: "#61C396",
                }}
              >
                <Flex align="center">
                  <AiOutlineShoppingCart
                    style={{
                      position: "absolute",
                      left: "5px",
                      fontSize: "25px",
                    }}
                  />
                </Flex>
              </button>
            </a>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default SmallNavbar;
