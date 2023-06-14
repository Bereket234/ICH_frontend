import {Avatar, Button, Flex, Heading, HStack, Spacer, Wrap, WrapItem, Text} from '@chakra-ui/react'
// import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';


function Navbar() {
    const {user}= useAuthContext()
    return (
        <Flex w= '100%' position='fixed' zIndex='10' bg='white' as="nav" px="100px" h= '10vh' alignItems="center"> 
            <NavLink to= "/">
                <Heading as="h1">ICH</Heading>

            </NavLink>
            <Spacer />

            <HStack spacing="20px">
                <NavLink to='/'>Home</NavLink>
                <NavLink to= '/about'>
                    About
                </NavLink>
                {user ?
                    (<Wrap>
                        <WrapItem>
                            <NavLink to="/dashboard">
                                <Flex alignItems='center'>
                                    <Text px= '10px'>Dashboard</Text>
                                    <Avatar src= "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"/>
                                </Flex>
                            </NavLink>
                        </WrapItem>
                    </Wrap>):
                    <Flex gap= "10px" alignItems='center'>
                    
                    <NavLink to= '/login'>
                        Login
                    </NavLink>
                    <NavLink to= '/register'>
                        <Button colorScheme='blue'>
                            Get Started
                        </Button>
                    </NavLink>
                    </Flex>
                }
            </HStack>
        </Flex>
    );
}

export default Navbar;