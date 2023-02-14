import React from "react";
import { Container, Box, Text, Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const numberFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0
});

const Header = () => {
  const currentMoney = useSelector((state) => state.products.currentMoney)
  return (
    <>
      <Box mt="6" width="full">
        <Container bg="white" maxW="container.lg" height="270" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Avatar size="2xl" name="Bill Gates" src="https://neal.fun/spend/billgates.jpg"/>
          <Text as="b" fontSize="4xl" mt="5" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            Spend Bill Gates' Money
          </Text>
        </Container>
      </Box>
      <Box mt="3" width="full" position="sticky" zIndex="9999" top="0">
        <Container bgGradient="linear-gradient(180deg,#2ecc71,#1abc9c)" maxW="container.lg" height="90" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Text color="white" as="b" fontSize="4xl">
          {numberFormat.format(currentMoney)}
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Header;
