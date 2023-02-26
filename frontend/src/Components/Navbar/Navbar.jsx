
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FiHeart } from "react-icons/fi"
import Logo from "../../assets/lavish_world_logo.png";

import {
  // Dropdown,
  Dropdown1,
  Dropdown2,
  Dropdown4,
  Dropdown5,
  Dropdown6,
  Dropdown7,
  Dropdown8,
  Dropdown3,
  Dropdown9,
  Dropdown10,
  Dropdown11,
  Dropdown12
} from "./Dropdown";
import {
  Flex,
  Spacer,
  Box,
  Image,
  Center,
  ButtonGroup,
  Button,
  InputLeftElement,
  InputGroup,
  Input,
  Text,
} from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ display = "flex" }) => {
  // const [dropdown, setdropdown] = useState(false);
  const [dropdown1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  const [dropdown3, setdropdown3] = useState(false);
  const [dropdown4, setdropdown4] = useState(false);
  const [dropdown5, setdropdown5] = useState(false);
  const [dropdown6, setdropdown6] = useState(false);
  const [dropdown7, setdropdown7] = useState(false);
  const [dropdown8, setdropdown8] = useState(false);
  const [dropdown9, setdropdown9] = useState(false);
  const [dropdown10, setdropdown10] = useState(false);
  const [dropdown11, setdropdown11] = useState(false);
  const [dropdown12, setdropdown12] = useState(false);

  return (
    <>
      <nav className={styles.nav_1}>
        <div className={styles.innernav}>
          <Flex alignItems="center" gap="2" p={1}>
            <NavLink to="/"><Image width="170px" height="75px" src={Logo} marginLeft="20px" /></NavLink>
            <Box p="2" display={"flex"}>
              <InputGroup marginLeft={"100px"}>
                <InputLeftElement
                  cursor="pointer"
                  children=
                  {<AiOutlineSearch style={{ position: "absolute", left: "560px", fontSize: "22px" }} color="gray.300" />}
                />
                <Input
                  width={"600px"}
                  type="text"
                  placeholder="Search"
                  border={"3px solid #9e9e9e"}
                />
              </InputGroup>
            </Box>

            <Spacer />

            <ButtonGroup gap="2" className={styles.rightside}>
              <Flex>
                <Center>
                  <BsPerson className={styles.carticons} />
                </Center>
              </Flex>

              <Flex>
                <Center>
                  <FiHeart className={styles.carticons} />
                </Center>
              </Flex>

              <button className={styles.cartbtn} >
                <Flex align="center">
                  <AiOutlineShoppingCart className={styles.carticons1} />
                </Flex>
              </button>
            </ButtonGroup>
          </Flex>
        </div>
      </nav>
      <nav className={styles.nav_2}>
        <Flex
          maxWidth="100%"
          alignItems="center"
          gap="45px"
          justify={"center"}
          display={display}
        >
          <NavLink to="/new">New</NavLink>
          <NavLink to="/massage"
            onMouseEnter={() => setdropdown1(true)}
            onMouseLeave={() => setdropdown1(false)}
          >
            Massage
          </NavLink>
          <NavLink to="/wellness"
            onMouseEnter={() => setdropdown2(true)}
            onMouseLeave={() => setdropdown2(false)}
          >
            Wellness
          </NavLink>
          <NavLink to="/sleep"
            onMouseEnter={() => setdropdown3(true)}
            onMouseLeave={() => setdropdown3(false)}
          >
            Sleep
          </NavLink>
          <Text
            onMouseEnter={() => setdropdown4(true)}
            onMouseLeave={() => setdropdown4(false)}
          >
            Home
          </Text>
          <Text
            onMouseEnter={() => setdropdown5(true)}
            onMouseLeave={() => setdropdown5(false)}
          >
            Wine & Bar
          </Text>
          <Text
            onMouseEnter={() => setdropdown6(true)}
            onMouseLeave={() => setdropdown6(false)}
          >

            Fitness
          </Text>
          <Text
            onMouseEnter={() => setdropdown7(true)}
            onMouseLeave={() => setdropdown7(false)}
          >
            Outdoor
          </Text>

          <Text
            onMouseEnter={() => setdropdown8(true)}
            onMouseLeave={() => setdropdown8(false)}
          >
            Travel
          </Text>

          <Text
            onMouseEnter={() => setdropdown9(true)}
            onMouseLeave={() => setdropdown9(false)}
          >
            Accessories
          </Text>
          <Text
            onMouseEnter={() => setdropdown10(true)}
            onMouseLeave={() => setdropdown10(false)}
          >
            Entertainment
          </Text>
          <Text
            onMouseEnter={() => setdropdown11(true)}
            onMouseLeave={() => setdropdown11(false)}
          >
            Gifts
          </Text>

          <Text
            onMouseEnter={() => setdropdown12(true)}
            onMouseLeave={() => setdropdown12(false)}
          >
            Sale
          </Text>
        </Flex>
      </nav>
      {/* {dropdown ? <Dropdown setdropdown={setdropdown} /> : null} */}
      {dropdown1 ? <Dropdown1 setdropdown1={setdropdown1} /> : null}
      {dropdown2 ? <Dropdown2 setdropdown2={setdropdown2} /> : null}
      {dropdown3 ? <Dropdown3 setdropdown3={setdropdown3} /> : null}
      {dropdown4 ? <Dropdown4 setdropdown4={setdropdown4} /> : null}
      {dropdown5 ? <Dropdown5 setdropdown5={setdropdown5} /> : null}
      {dropdown6 ? <Dropdown6 setdropdown6={setdropdown6} /> : null}
      {dropdown7 ? <Dropdown7 setdropdown7={setdropdown7} /> : null}
      {dropdown8 ? <Dropdown8 setdropdown8={setdropdown8} /> : null}
      {dropdown9 ? <Dropdown9 setdropdown9={setdropdown9} /> : null}
      {dropdown10 ? <Dropdown10 setdropdown10={setdropdown10} /> : null}
      {dropdown11 ? <Dropdown11 setdropdown11={setdropdown11} /> : null}
      {dropdown12 ? <Dropdown12 setdropdown12={setdropdown12} /> : null}
    </>
  );
};

export default Navbar;
