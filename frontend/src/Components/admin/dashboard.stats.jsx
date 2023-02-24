import {
  Box,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { GiHeavyCollar} from "react-icons/gi";
;
const DashboardStats = () => {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.

    <SimpleGrid
      columns={[1, 2, 3]}
      spacing={["10px", "30px", "50px"]}
      color="blackAlpha.600"
    >
      <Box
        bg="tomato"
        height="100px"
        display={"flex"}
        alignItems={"center"}
        pl={10}
      >
        <Box bg={"yellow"} borderRadius="50%" p={3}>
          {" "}
          <GiHeavyCollar fontSize={"30px"} color="black" />
        </Box>
        <Box pl={2}>
          {" "}
          <Text fontWeight={600} as={"h5"}>
            Total Products
          </Text>
          <Text fontWeight={600} as={"h5"}>
            70
          </Text>
        </Box>
      </Box>
      <Box
        bg="tomato"
        height="100px"
        display={"flex"}
        alignItems={"center"}
        pl={10}
      >
        <Box bg={"yellow"} borderRadius="50%" p={3}>
          {" "}
          <GiHeavyCollar fontSize={"30px"} color="black" />
        </Box>
        <Box pl={2}>
          {" "}
          <Text fontWeight={600} as={"h5"}>
            Total Products
          </Text>
          <Text fontWeight={600} as={"h5"}>
            70
          </Text>
        </Box>
      </Box>
      <Box
        bg="tomato"
        height="100px"
        display={"flex"}
        alignItems={"center"}
        pl={10}
      >
        <Box bg={"yellow"} borderRadius="50%" p={3}>
          {" "}
          <GiHeavyCollar fontSize={"30px"} color="black" />
        </Box>
        <Box pl={2}>
          {" "}
          <Text fontWeight={600} as={"h5"}>
            Total Products
          </Text>
          <Text fontWeight={600} as={"h5"}>
            70
          </Text>
        </Box>
      </Box>
      {/* <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box> */}
    </SimpleGrid>
  );
};
export default DashboardStats;
