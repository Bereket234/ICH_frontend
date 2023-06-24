import {useState} from 'react';
import { DeleteIcon } from "@chakra-ui/icons";
import {  Badge, Box, Icon, Spacer } from "@chakra-ui/react";
import { deleteImge } from '../../services/imageService';

const DeleteImage = ({image}) => {
    const [isLoading, setIsLoading]= useState(false)


    const handleClick= (e) => {
        e.preventDefault()
        setIsLoading(true)
        deleteImge(image.id)
        .then(res=> {
            setIsLoading(false)
            // setIsBookmarked(!isBookmarked)
    
        })
        .catch(e=> {
            console.log(e)
    
        })
      }
    return (
        <Box cursor='pointer' onClick={handleClick} position='relative' _disabled={isLoading}>
            <Badge display='flex' padding='.4rem' alignItems='center' colorScheme="red" position='absolute' top={0} right={0}>
                <Spacer/>
                <Icon as={DeleteIcon} />
            </Badge>

        </Box>
    );
};

export default DeleteImage;