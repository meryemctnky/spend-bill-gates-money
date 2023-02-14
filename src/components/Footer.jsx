import { Box,Container, Text,Button } from '@chakra-ui/react';
import React from 'react';
import { SiLinkedin,SiGithub  } from 'react-icons/si';

function Footer() {
  return (
    <Box my="3" width="full" >
        <Container bg="white" maxW="container.lg" height="100" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Text mt="5">Created by Meryem Çetinkaya</Text>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" my="3">
                <Button me="5" leftIcon={<SiLinkedin />}>
                    <a href='https://www.linkedin.com/in/meryem-cetinkaya/' target='_blank'>Linkedin</a>
                </Button>
                <Button  colorScheme='gray' leftIcon={<SiGithub />} >
                    <a href='https://github.com/meryemctnky' target='_blank'>Github</a>
                </Button>
            </Box> 
        </Container>
    </Box>
  )
}

export default Footer;