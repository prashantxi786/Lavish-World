import React from 'react';
import{
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,Input,
  DrawerContent,
  DrawerCloseButton,Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Divider,Box,Image,Text
} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ChevronDownIcon ,SearchIcon} from '@chakra-ui/icons'
import logo from "../../assets/lavish_world_logo.png"
import { AiOutlineShoppingCart } from "react-icons/ai"

const Cart = () => {
  let style={
    width: "48px",
    height: "30px",
    backgroundColor:" #61C396",
    padding: "1px 3px 1px 0px",
    color: "white",
    borderRadius: "5px",
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef() 
  return (
    <div>
      <AiOutlineShoppingCart style={style}fontSize={"25px"} ref={btnRef} onClick={onOpen}/>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader><Image h="30px" src={logo}></Image></DrawerHeader>

          <DrawerBody display={"flex"} flexDir="column" gap={"20px"}>
            {/* <NavLink  color="red" to="/about">Cart</NavLink> */}
            {/* <Divider colorScheme="blackAlpha" borderColor={"black"}/> */}
            <NavLink color="red" to="/">Contact us</NavLink>
            <Divider colorScheme="blackAlpha" borderColor={"black"}/>
            <Accordion allowToggle >
            <AccordionItem border="none">
                <AccordionButton  p="0px" >     
                  <Box w="100%"display={"flex"} justifyContent="space-between"><Text >View Cart</Text><ChevronDownIcon fontSize="25px"/></Box>
                </AccordionButton>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                <Button display={"block"} width="100%"
                    bg={'#65c297'}
                    color={'white'}
                    mb="5px"
                    _hover={{
                      bg: '#458B6A',
                    }}>View More</Button>
                <Button display={"block"} width="100%"
                    border={'1px solid #65c297'}
                    bg="white"
                    color={'black'}
                    _hover={{
                      bg: '#458B6A',
                      color:"white"
                    }}>Checkout</Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
            <Divider colorScheme="blackAlpha" borderColor={"black"}/>
            <NavLink color="red" to="/">Whatsapp</NavLink>
            <Divider colorScheme="blackAlpha" borderColor={"black"}/>
            <NavLink color="red" to="/">Call Now</NavLink>
          </DrawerBody>
          <DrawerFooter display={"flex"} justifyContent="center"  border="1px solid gray">
            <Text fontSize={"xx-small"}> *enter promo codes at checkout. taxes and shipping calculated at checkout.</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Cart;
