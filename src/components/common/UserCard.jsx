import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, Badge, Text, Flex, Spacer, Icon } from "@chakra-ui/react";
import { bookmark } from "../../services/imageService";
import { useState } from "react";

export default function UserCard({image}) {
    const {patient}= image
  const { name, cardNumber, sex, age, phone, imageCount, description, registeredDate } = patient;
  const [isLoading, setIsLoading]= useState(false)
  const [isBookmarked, setIsBookmarked]= useState(image.isBookmarked)
  console.log("logged here in card" ,image)

  const handleClick= (e) => {
    e.preventDefault()
    setIsLoading(true)
    bookmark(image.id)
    .then(res=> {
        setIsLoading(false)
        setIsBookmarked(!isBookmarked)

    })
    .catch(e=> {
        console.log(e)

    })
  }
  return (
    <Box  borderWidth="1px" borderRadius="15" overflow="hidden" boxShadow="2xl" padding='30' w= '100%'>
      <Box position="relative" w='50%' margin='0 auto'>
        <Image w='50px' h='50px' src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="User Image" />
        <Badge colorScheme="blue" position='absolute' top={0} right={0}>
          {imageCount} images
        </Badge>
      </Box>
      <Box p='10px 0px' w='50%' margin='0 auto'>
        <Flex justifyContent='flex-start' alignItems='center'>
          <Text fontSize="2xl" fontWeight="semibold" mr={2}>
            {name}
          </Text>
          <Icon onClick={handleClick} color={isBookmarked? "lightblue" : "gray"} _disabled={isLoading} cursor='pointer'  as={StarIcon} />

        </Flex>
        <Flex >
        <Box d="flex" alignItems="baseline">
          <Text fontSize="m" color="gray.500">
            Card Number: {cardNumber}
          </Text>
          <Text mt={2} fontSize="m"  color="gray.500">
            Sex: {sex}
            </Text>
            <Text mt={2} fontSize="m"  color="gray.500">
            Age: {age}
            </Text>
        </Box>
        <Spacer/>
        <Box d="flex" alignItems="baseline">
            <Text mt={2} fontSize="m"  color="gray.500">
            Phone: {phone}
            </Text>
            <Text mt={2} fontSize="m"  color="gray.500">
            Description: {description}
            </Text>
            <Text mt={2} fontSize="m"  color="gray.500">
            Registered Date: {registeredDate}
            </Text>
        </Box>
        </Flex>
        
      </Box>
    </Box>
  );
}