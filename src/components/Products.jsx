import React from "react";
import { Box, SimpleGrid, Container } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";


const Products = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <Box mt="3" width="full">
      <Container maxW="container.lg" px="0">
        <SimpleGrid columns={[1, 2, 3]} spacing="10px">
          {products.map((product) => (
            <ProductCard key={product.id} {...product}/>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Products;
