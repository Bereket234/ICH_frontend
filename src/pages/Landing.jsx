import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} alignItems='center' justifyContent='center'>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '3xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                display="inline"
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Empowering Physicians, Enriching Lives: The Next Generation Healthcare Platform
              </Text>
      
            </Heading>
        
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <NavLink to='/login'>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Get Started
              </Button>
              </NavLink>
            </Stack>
          </Stack>
          <Image maxHeight={500}
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://source.unsplash.com/random/800x600/?brain'
            }
          />
        </Flex>
      </Stack>
    );
};

export default LandingPage;