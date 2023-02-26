import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const ProductCard = ({ product }) => {
  console.log(product);
  const {
    category,
    compare_at_price,
    price,
    product_title,
    product_title_href,
    w_full,
    _id,
  } = product;
  return (
    <Stack
      bg={"#efe8e8"}
      border={"3px solid #ffcc00"}
      borderRadius={"10"}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      padding={"8px"}
      spacing={{
        base: "4",
        md: "5",
      }}
    >
      <Box position="relative">
        <AspectRatio ratio={5 / 3}>
          <Image
            src={product_title_href}
            alt={product_title}
            fallback={<Skeleton />}
            borderRadius={{
              base: "md",
              md: "xl",
            }}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            📝 {product_title}
          </Text>
        </Stack>
        <HStack justifyContent={"space-around"}>
          <Text fontSize="sm" color={"black"}>
            {compare_at_price} Ratings ⭐
          </Text>
          <Text fontSize="sm" color="black">
            {price} Price 💰
          </Text>
        </HStack>
        <Text fontSize="sm" color="black" fontWeight={"bold"}>
          {category}
        </Text>
      </Stack>
      <Stack>
        <Flex justifyContent={"space-between"}>
          <Button colorScheme="blue">UPDATE</Button>
          <Button bg="#f24646">REMOVE</Button>
        </Flex>
        <Button bg="#38bc5e" width="full" color={"black"}>
          Active
        </Button>
      </Stack>
    </Stack>
  );
};

// category: "sale";
// compare_at_price: 47.49;
// price: 45.12;
// product_title: "Aromatherapy Infused Pillow Lavender";
// product_title_href: "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/AromatherapyInfusedPillow_Lavendar_IG7522_200x.jpg?v=1596748068";
// w_full: "Final Sale - No Exchanges or Returns";
// _id: "63f8615455c951a993a2dccf";
