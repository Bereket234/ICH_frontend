import { useState } from "react";
import { bookmark } from "../../services/imageService";
import { StarIcon } from "@chakra-ui/icons";
import {  Badge, Box, Icon, Spacer } from "@chakra-ui/react";



function Bookmark({image}) {
    const [isLoading, setIsLoading]= useState(false)
  const [isBookmarked, setIsBookmarked]= useState(image.isBookmarked)
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
        <Box cursor='pointer' onClick={handleClick} position='relative' _disabled={isLoading}>
            <Badge display='flex' padding='.4rem' alignItems='center' colorScheme="blue" position='absolute' w='7rem' top={0} left={0}>
                {isBookmarked? "UnBookmark" : "Bookmark"}
                <Spacer/>
                <Icon onClick={handleClick} color={isBookmarked? "blue" : "gray"} _disabled={isLoading}   as={StarIcon} />
            </Badge>

        </Box>
    );
}

export default Bookmark;