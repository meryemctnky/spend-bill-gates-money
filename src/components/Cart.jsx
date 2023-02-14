import React, { useState, useEffect } from "react";
import { Container, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const numberFormat = new Intl.NumberFormat("en-GB", {
  currencyDisplay: "symbol",
  notation: "compact",
  compactDisplay: "short",
  maximumFractionDigits: 1
});

const totalFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0
});

const Cart = () => {
  const [show, setShow] = useState(false)
  const { products, currentMoney, totalMoney } = useSelector((state) => state.products);

  useEffect(() => {
    if (currentMoney === 100000) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [currentMoney]);

  return (
    <>
    {show && (
      <Box my="3" width="full">
        <Container bg="white" color="#333" maxW="container.lg" display="flex" flexDirection="column" alignItems="center" justifyContent="center" p="10px">
          <Text color="#333" fontWeight="medium" fontSize="3xl" mt="5px">
            Your Receipt
          </Text>
          <Box display="flex" flexDirection="column" maxW="md" mx="auto" my="5px">
            {  products.map((item) => item.count > 0 && (
            <SimpleGrid columns={3} spacing="10px" key={item.id}>
              <Box fontWeight="medium" fontSize="18px" color="#333">{item.name}</Box>
              <Box textAlign="center" fontWeight="medium" fontSize="18px" color="#333">x{item.count}</Box>
              <Box textAlign="end" color="#24c486" fontWeight="bold" fontSize="18px">${numberFormat.format(item.count * item.price)}</Box>
            </SimpleGrid>
              ))
            }
            <Box display="flex" flexDirection="column" maxW="full" mx="0" my="15px" justifyContent="space-between" borderTop="2px" fontWeight="medium" fontSize="18px" color="#333">
            <SimpleGrid columns={2} spacing="" mt="10px">
              <Box fontWeight="bold" fontSize="20px" color="#333">TOTAL :</Box>
              <Box textAlign="end" color="#24c486" fontWeight="bold" fontSize="18px">{totalFormat.format(totalMoney - currentMoney)}</Box>
            </SimpleGrid>
            </Box>
          </Box>
        </Container>
      </Box>
    )}
     </>
  )
}

export default Cart;



