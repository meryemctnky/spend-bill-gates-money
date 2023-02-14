import React from "react";
import { Container, Box, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
      <Box bg="white" margin={0} width="full" height="110">
        <Container
          maxW="container.lg"
          display="flex"
          flexDirection="column"
          alignItems="self-start"
          justifyContent="center"
        >
          <Image
            boxSize="110px"
            objectFit="fill"
            src={logo}
            alt="neal fun logo"
          />
        </Container>
      </Box>
  );
};

export default Navbar;
