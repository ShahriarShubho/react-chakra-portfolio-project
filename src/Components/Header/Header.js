import React from 'react';
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import Icon from '@chakra-ui/icon'
import {HStack, Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa'


const Header = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <>
        <Stack>
        <Circle position="absolute" bg="blue.100" opacity="0.2"
            w="300px" h="300px" alignSelf="flex-end" zIndex="-1" />
        <Flex direction={isNotSmallerScreen ? "row" : "column"}
            spacing="200px" p={isNotSmallerScreen ? "28" : "0"}
            alignSelf="flex-start">
            <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                <Text fontSize="4xl" fontWeight="semibold">Hi, I am</Text>
                <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Shahriar Shubho</Text>
                <Text color={isDark ? "gray.200" : "gray.500"}>A Full Stack Web Developer. My favorite programming languages is JavaScript And I development MERN Stack Website</Text>
                <Button mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://shahriar-shubho.netlify.app/")
                }>Hire Me</Button>

            </Box>
            <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                backgroundColor="transparent" boxShadow="lg"
                boxSize="300px" src='https://i.ibb.co/Csw98QS/IMG-20190310-091931-01-removebg-preview.jpg' />
        </Flex>
    </Stack>
    <HStack spacing="24">
            <Icon as={FaFacebookF} boxSize="50" />
            <Icon as={FaGoogle} boxSize="50" />
            <Icon as={FaSpotify} boxSize="50" />
            <Icon as={FaShopify} boxSize="50" />
        </HStack>
        </>
    );
};

export default Header;