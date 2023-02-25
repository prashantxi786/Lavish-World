import { Flex, Box, Image, HStack, VStack, Text, MenuDivider, Divider, Stack } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import gift1 from "../assets/gift1.avif"
import gift2 from "../assets/gift2.avif"
import mess1 from "../assets/mess1.jpg"
import mess2 from "../assets/mass2.webp"
import well1 from "../assets/well1.avif"
import well2 from "../assets/well2.avif"
import sleep1 from "../assets/sleep1.avif"
import sleep2 from "../assets/sleep2.avif"
import home1 from "../assets/home1.avif"
import home2 from "../assets/home2.avif"
import out1 from "../assets/out1.avif"
import out2 from "../assets/out2.avif";
import wine1 from "../assets/wine1.avif";
import wine2 from "../assets/wine2.avif";
import fit1 from "../assets/fit1.avif";
import fit2 from "../assets/fit2.avif";
import travel1 from "../assets/travel1.avif";
import travel2 from "../assets/travel2.avif";
import ass1 from "../assets/ass1.avif";
import ass2 from "../assets/ass2.avif";
import entern1 from "../assets/entern1.avif";
import entern2 from "../assets/entern2.avif";


// export const Dropdown = ({ setdropdown }) => {
//   return (
//     <Box
//       position={"absolute"}
//       backgroundColor={"white"}
//       zIndex={1}
//       width={"100%"}
//       m="0px auto"
//       boxShadow={
//         "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
//       }
//       onMouseEnter={() => setdropdown(true)}
//       onMouseLeave={() => setdropdown(false)}
//       color="black"
//       p="20px"
//       rounded="md"
//       bg="#fff"
//     >
//       <Flex className={styles.dropdown}  justifyContent="space-evenly">
//         <ul>
//           <li>
//             <a href={""}>All Women Ethnic</a>
//           </li>
//           <li>
//             <a href={"/products"}>View All</a>
//           </li>
//         </ul>
//         <ul>
//           <li>
//             <a href={""}>Sarees</a>
//           </li>
//           <li>
//             {" "}
//             <a href={""}>All Sarees</a>
//           </li>
//           <li>
//             {" "}
//             <a href={""}>Silk Sarees</a>
//           </li>
//           <li>
//             {" "}
//             <a href={""}>Cotton Silk Sarees</a>
//           </li>
//           <li>
//             <a href={""}>Cotton Sarees</a>
//           </li>

//           <li>
//             <a href={""}>Georgette Sarees</a>
//           </li>
//           <li>
//             <a href={""}>Chiffon Sarees</a>
//           </li>
//         </ul>
//         <ul>
//           <li>
//             {" "}
//             <a href={""}>Kurtis</a>
//           </li>
//           <li>
//             {" "}
//             <a href={""}>All Kurtis</a>
//           </li>
//           <li>
//             <a href={""}>Anarkali Kurtis</a>
//           </li>
//           <li>
//             {" "}
//             <a href={""}>Rayon Kurtis</a>
//           </li>
//           <li>
//             <a href={""}>Cotton Kurtis</a>
//           </li>

//           <li>
//             <a href={""}>Embroidered Kurtis</a>
//           </li>
//         </ul>
//         <ul>
//           <li>
//             {" "}
//             <a href={""}>Kurta Set</a>
//           </li>
//           <li>
//             <a href={""}>All Kurta Sets</a>
//           </li>
//         </ul>
//         <ul>
//           <li>
//             <a href={""}>Suits & Dress Material</a>
//           </li>
//           <li>
//             {" "}
//             <a href={""}>All Suits & Dress Material</a>
//           </li>
//           <li>
//             {" "}
//             <a href={""}>Cotton Suits</a>
//           </li>
//           <li>
//             {" "}
//             <a href={""}>Embroidered Suits</a>
//           </li>
//           <li>
//             {" "}
//             <a href={""}>Chanderi Suits</a>
//           </li>
//         </ul>
//         <ul>
//           <li>
//             {" "}
//             <a href={""}>Other Ethnic</a>
//           </li>
//           <li>
//             <a href={""}>Blouses</a>
//           </li>
//           <li>
//             <a href={""}>Dupattas</a>
//           </li>
//           <li>
//             <a href={""}>Lehanga</a>
//           </li>
//           <li>
//             {" "}
//             <a href={""}>Gown</a>
//           </li>
//           <li>
//             <a href={""}> Bottomwear</a>
//           </li>
//         </ul>
//       </Flex>
//     </Box>
//   );
// };


export const Dropdown1 = ({ setdropdown1 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1}
      width={"100%"}
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }

      onMouseEnter={() => setdropdown1(true)}
      onMouseLeave={() => setdropdown1(false)}
      color="black"
      p="20px 0 20px 140px"
      bg="white.500"
      rounded="md"

    >
      <Flex gap="20" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Message Chairs</a>
          </li>
          <li>
            {" "}
            <a href={""}>Eyes</a>
          </li>
          <li>
            <a href={""}>Foot & Leg</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Message Guns</a>
          </li>
          <li>
            <a href={""}>Hands</a>
          </li>
          <li>
            <a href={""}>Intimate</a>
          </li>

        </ul>
        <ul>
          <li>
            <a href={""}>Neck & Back</a>
          </li>
          <li>
            <a href={""}>Rollers</a>
          </li>
          <li>
            <a href={""}>Seat Topper</a>
          </li>
          
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Best Sellers</a>
          </li>
          <li>
            <a href={""}>View All</a>
          </li>
        </ul>

        <Stack pos={"relative"} left="140px" direction='row' h='220px' p={1} >
          <Divider border={"1.5px solid "} borderColor={"lightgray"} orientation='vertical' />
        </Stack>
        <HStack ml={"100px"}>
          <VStack className="styles.subtext">
            <Image ml={15} width={150} height={150} src={mess1} />
            <Text >Message Chair Guide</Text>
          </VStack>
          <VStack>
            <Image ml={15} width={150} height={150} src={mess2} />
            <Text>Foot & Leg Message</Text>
          </VStack>
          </HStack>
      </Flex>
    </Box>
  );
};
export const Dropdown2 = ({ setdropdown2 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1}
      width={"100%"}
      m="0px auto"
      p="20px 0 20px 140px"
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
      onMouseEnter={() => setdropdown2(true)}
      onMouseLeave={() => setdropdown2(false)}
      color="black"
      // p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="20" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Bath</a>
          </li>
          <li>
            {" "}
            <a href={""}>Cold & Heat Therapy</a>
          </li>
          <li>
            <a href={""}>Comfort</a>
          </li>
          <li>
            {" "}
            <a href={""}>Cleanser & Serums</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Cupping</a>
          </li>
          <li>
            {" "}
            <a href={""}>Eye Care</a>
          </li>
          <li>
            {" "}
            <a href={""}>Grooming</a>
          </li>
          <li>
            {" "}
            <a href={""}>Hair Care</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>LED Light Therapy</a>
          </li>
          <li>
            {" "}
            <a href={""}>All Men Accessories</a>
          </li>
          <li>
            <a href={""}>Meditation</a>
          </li>
          <li>
            {" "}
            <a href={""}>Skin Care</a>
          </li>
          <li>
            <a href={""}>Sound Machines</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Best Sellers</a>
          </li>
          <li>
            <a href={""}>View All</a>
          </li>
       
        </ul>
      

        <Stack pos={"relative"} left="140px" direction='row' h='220px' p={1}>
          <Divider border={"1.5px solid "} borderColor={"lightgray"}  orientation='vertical' />
        </Stack>
        <HStack ml={"80px"}>
          <VStack className="styles.subtext">
            <Image ml={30} width={150} height={150} src={well1} />
            <Text >Bath</Text>
          </VStack>
          <VStack>
            <Image ml={35} width={150} height={150} src={well2} />
            <Text>Skin Care</Text>
          </VStack>
          </HStack>
      </Flex>
    </Box>
  );
};
export const Dropdown3 = ({ setdropdown3 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1}
      width={"100%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
      onMouseEnter={() => setdropdown3(true)}
      onMouseLeave={() => setdropdown3(false)}
      color="black"
      p="20px 0 20px 140px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="20" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Air Quality</a>
          </li>
          <li>
            <a href={""}>Alarms</a>
          </li>
          <li>
            <a href={""}>Bidding</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Clocks</a>
          </li>
          <li>
            <a href={""}>Comfort</a>
          </li>
          <li>
            <a href={""}>Mattress</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Pillow</a>
          </li>
          <li>
            {" "}
            <a href={""}>Intimate Pillows</a>
          </li>
          <li>
            <a href={""}>Sound Machines</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>View All</a>
          </li>
        </ul>


        <Stack pos={"relative"} left="200px" direction='row' h='220px' p={1}>
          <Divider border={"1.5px solid "} borderColor={"lightgray"}  orientation='vertical' />
        </Stack>
        <HStack ml={"150px"}>
          <VStack className="styles.subtext">
            <Image ml={30} width={150} height={150} src={sleep1} />
            <Text >Pillows</Text>
          </VStack>
          <VStack>
            <Image ml={35} width={150} height={150} src={sleep2} />
            <Text>Sound Machines</Text>
          </VStack>
          </HStack>
      </Flex>
    </Box>
  );
};
export const Dropdown4 = ({ setdropdown4 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1}
      width={"100%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
      onMouseEnter={() => setdropdown4(true)}
      onMouseLeave={() => setdropdown4(false)}
      color="black"
      p="20px 0 20px 140px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="70px" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Accent & Decors</a>
          </li>
          <li>
            <a href={""}>Air Quality</a>
          </li>
          <li>
            <a href={""}>Bathroom</a>
          </li>
          <li>
            <a href={""}>Bidding</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Furniture</a>
          </li>
          <li>
            <a href={""}>Holiday Decor</a>
          </li>
          <li>
            <a href={""}>Home Improvement</a>
          </li>
          <li>
            {" "}
            <a href={""}>Home Office</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href={""}>Kitchen</a>
          </li>
          <li>
            <a href={""}>Lighting</a>
          </li>
          <li>
            <a href={""}>Outdoor</a>
          </li>
          <li>
            <a href={""}>Pet</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>SV Sanitation</a>
          </li>
          <li>
            <a href={""}>Weather Stations</a>
          </li>
          <li>
            <a href={""}>View All</a>
          </li>
        </ul>


        <Stack pos={"relative"} left="170px" direction='row' h='220px' p={1}>
          <Divider  border={"1.5px solid "} borderColor={"lightgray"}  orientation='vertical' />
        </Stack>
        <HStack ml={"100px"}>
          <VStack className="styles.subtext">
            <Image ml={30} width={160} height={160} src={home1} />
            <Text >Accent & Decors</Text>
          </VStack>
          <VStack>
            <Image ml={35} width={150} height={150} src={home2} />
            <Text>Lighting</Text>
          </VStack>
          </HStack>
      </Flex>
    </Box>
  );
};
export const Dropdown5 = ({ setdropdown5 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1}
      width={"100%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
      onMouseEnter={() => setdropdown5(true)}
      onMouseLeave={() => setdropdown5(false)}
      color="black"
      p="20px 0 20px 140px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="70px" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Decanters</a>
          </li>
          <li>
            <a href={""}>Gift Sets</a>
          </li>
        
        </ul>
        <ul>
          <li>
            <a href={""}>Glasswares</a>
          </li>
          <li>
            <a href={""}>Non-Glasswares</a>
          </li>
          
        </ul>
        <ul>
          <li>
            <a href={""}>Tech</a>
          </li>
          <li>
            <a href={""}>Tools & Assesories</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>View All</a>
          </li>
      
        </ul>


        <Stack pos={"relative"} left="220px" direction='row' h='220px' p={1}>
          <Divider  border={"1.5px solid "} borderColor={"lightgray"}  orientation='vertical' />
        </Stack>
        <HStack ml={"150px"}>
          <VStack className="styles.subtext">
            <Image ml={30} width={150} height={150} src={wine1} />
            <Text >Assesories & Tools</Text>
          </VStack>
          <VStack>
            <Image ml={35} width={150} height={150} src={wine2} />
            <Text>Glassware</Text>
          </VStack>
          </HStack>
      </Flex>
    </Box>
  );
};
export const Dropdown6 = ({ setdropdown6 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1}
      width={"100%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
      onMouseEnter={() => setdropdown6(true)}
      onMouseLeave={() => setdropdown6(false)}
      color="black"
      p="20px 0 20px 140px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="70px" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Accessories</a>
          </li>
          <li>
            {" "}
            <a href={""}>Connected Fitness</a>
          </li>
       
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Exercise Machines</a>
          </li>
          <li>
            {" "}
            <a href={""}>Sport Recovery</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Yoga</a>
          </li>
          <li>
            {" "}
            <a href={""}>View All</a>
          </li>
        </ul>

        <Stack  pos={"relative"} left="220px" direction='row' h='220px' p={1}>
          <Divider  border={"1.5px solid "} borderColor={"lightgray"}  orientation='vertical' />
        </Stack>
        <HStack ml={"150px"}>
          <VStack className="styles.subtext">
            <Image ml={30} width={150} height={150} src={fit1} />
            <Text >Assessories</Text>
          </VStack>
          <VStack>
            <Image ml={35} width={150} height={150} src={fit2} />
            <Text>Connected Fitness</Text>
          </VStack>
          </HStack>
      </Flex>
    </Box>
  );
};
export const Dropdown7 = ({ setdropdown7 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1}
      width={"100%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
      onMouseEnter={() => setdropdown7(true)}
      onMouseLeave={() => setdropdown7(false)}
      color="black"
      p="20px 0 20px 140px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="70px" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>E-Bikes</a>
          </li>
          <li>
            {" "}
            <a href={""}>Camping & Adventure</a>
          </li>
          <li>
            {" "}
            <a href={""}>Decore</a>
          </li>
          <li>
            {" "}
            <a href={""}>Furniture</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Game Day</a>
          </li>
          <li>
            <a href={""}>Gardening</a>
          </li>
          <li>
            <a href={""}>Grills, BBQs & Fire Pits</a>
          </li>
          <li>
            <a href={""}>Lighting</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href={""}>Picnic</a>
          </li>
          <li>
            {" "}
            <a href={""}>Pool & Beache</a>
          </li>
          <li>
            <a href={""}>Portable Coolers</a>
          </li>
          <li>
            <a href={""}>Solar</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Scooters</a>
          </li>
          <li>
            <a href={""}>Weather Stations</a>
          </li>
          <li>
            <a href={""}>View All</a>
          </li>
        </ul>

        <Stack pos={"relative"} left="100px" direction='row' h='220px' p={1}>
          <Divider border={"1.5px solid "} borderColor={"lightgray"}  orientation='vertical' />
        </Stack>
        <HStack ml={"30px"}>
          <VStack className="styles.subtext">
            <Image ml={30} width={150} height={150} src={out1} />
            <Text >Furnitures</Text>
          </VStack>
          <VStack>
            <Image ml={35} width={150} height={150} src={out2} />
            <Text>Grills, BBQs & Fire Pits</Text>
          </VStack>
          </HStack>
      </Flex>
    </Box>
  );
};
export const Dropdown8 = ({ setdropdown8 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1}
      width={"100%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
      onMouseEnter={() => setdropdown8(true)}
      onMouseLeave={() => setdropdown8(false)}
      color="black"
      p="20px 0 20px 140px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="70px" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Accessories</a>
          </li>
          <li>
            {" "}
            <a href={""}>Emergency Preparedness</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Luggage</a>
          </li>
          <li>
            <a href={""}>Neck Pillows</a>
          </li>
      
        </ul>
        <ul>
          <li>
            <a href={""}>View All</a>
          </li>
        </ul>


        <Stack  pos={"relative"} left="200px" direction='row' h='220px' p={1}>
          <Divider border={"1.5px solid "} borderColor={"lightgray"}  orientation='vertical' />
        </Stack>
        <HStack ml={"150px"}>
          <VStack className="styles.subtext">
            <Image ml={30} width={150} height={150} src={travel1} />
            <Text >Luggage</Text>
          </VStack>
          <VStack>
            <Image ml={35} width={150} height={150} src={travel2} />
            <Text>Accessories</Text>
          </VStack>
          </HStack>
      </Flex>
    </Box>
  );
};

export const Dropdown9 = ({ setdropdown9 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1}
      width={"100%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
      onMouseEnter={() => setdropdown9(true)}
      onMouseLeave={() => setdropdown9(false)}
      color="black"
      p="20px 0 20px 140px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="70px" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Bags & Bagpacks</a>
          </li>
          <li>
            <a href={""}>Everyday Carry</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Keychains</a>
          </li>
          <li>
            <a href={""}>Opticals & Sunglasses</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Wallets</a>
          </li>
          <li>
            <a href={""}>Watches & Jewelery Cases</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>View All</a>
          </li>
        </ul>


        <Stack pos={"relative"} left="120px" direction='row' h='220px' p={1}>
          <Divider  border={"1.5px solid "} borderColor={"lightgray"}  orientation='vertical'  />
        </Stack>
        <HStack ml={"50px"}>
          <VStack className="styles.subtext">
            <Image ml={30} width={150} height={150} src={ass1} />
            <Text >Bar Gift Sets</Text>
          </VStack>
          <VStack>
            <Image ml={35} width={150} height={150} src={ass2} />
            <Text>Bar Gift Sets</Text>
          </VStack>
          </HStack>
      </Flex>
    </Box>
  );
};

export const Dropdown10 = ({ setdropdown10 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1}
      width={"100%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
      onMouseEnter={() => setdropdown10(true)}
      onMouseLeave={() => setdropdown10(false)}
      color="black"
      p="20px 0 20px 140px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="20" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Discovery</a>
          </li>
          <li>
            <a href={""}>Games</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Halloween</a>
          </li>
          <li>
            <a href={""}>Holiday</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Toys</a>
          </li>
          <li>
            <a href={""}>View All</a>
          </li>
        </ul>

        <Stack pos={"relative"} left="440px" direction='row' h='220px' p={1}>
          <Divider   border={"1.5px solid "} borderColor={"lightgray"}  orientation='vertical'  />
        </Stack>
        <HStack ml={"400px"}>
          <VStack className="styles.subtext">
            <Image ml={30} width={150} height={150} src={entern1} />
            <Text >Discovery</Text>
          </VStack>
          <VStack>
            <Image ml={35} width={150} height={150} src={entern2} />
            <Text></Text>
          </VStack>

        </HStack>
      </Flex>
    </Box>
  );
};

export const Dropdown11 = ({ setdropdown11 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1}
      width={"100%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
      onMouseEnter={() => setdropdown11(true)}
      onMouseLeave={() => setdropdown11(false)}
      color="black"
      p="40px 0 40px 140px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="20" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Gift for her</a>
          </li>
          <li>
            <a href={""}>Gift for him</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Gift Cards</a>
          </li>
          <li>
            {" "}
            <a href={""}>Gift Under $100</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Bar Gift Sets</a>
          </li>
          <li>
            {" "}
            <a href={""}>Best Sellers</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>View All</a>
          </li>
        </ul>
        <Stack direction='row' h='200px' p={3}>
          <Divider  orientation='vertical' />
        </Stack>
        <HStack ml={"150px"}>
          <VStack className="styles.subtext">
            <Image ml={30} width={150} height={150} src={gift1} />
            <Text >Bar Gift Sets</Text>
          </VStack>
          <VStack>
            <Image ml={35} width={150} height={150} src={gift2} />
            <Text>Bar Gift Sets</Text>
          </VStack>

        </HStack>
      </Flex>
    </Box>
  );
};

export const Dropdown12 = ({ setdropdown12 }) => {
  return (
    <Box
      position={"absolute"}
      left={"96rem"}
      backgroundColor={"white"}
      zIndex={1}
      width={"14%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
      onMouseEnter={() => setdropdown12(true)}
      onMouseLeave={() => setdropdown12(false)}
      color="black"
      p={"5px 5px 0px "}
      bg="white.500"
      rounded="md"
    >
      <Flex className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Free Shipping</a>
          </li>
          <li>
            <a href={""}>Free Personlization</a>
          </li>
          <li>
            <a href={""}>View All</a>
          </li>
        </ul>

      </Flex>
    </Box>
  );
};