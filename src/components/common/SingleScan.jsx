import React from 'react';
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Bookmark from './Bookmark';
import DeleteImage from './DeleteImage';


function SingleScan({image}) {
    return (
        <Box>
            <Bookmark image= {image} />
            <DeleteImage image= {image}/>
            <Flex width='100%' justifyContent="space-between" alignItems="center" mt= {5}>
            <Box >
                <Image maxW='300px' src={`http://localhost:8000${image.originalImage}`} alt="Brain Image" />
                <Text>Image</Text>
            </Box>
            <Box>
                <Image maxW='300px' src={`http://localhost:8000${image.predictedImage}`} alt="Hemorrhage Image" />
                <Text>Location of hemhorrage</Text>
            </Box>
            <Box>
                <Image maxW='300px' src={`http://localhost:8000${image.mask}`} alt="Mask Image" />
                <Text>Mask</Text>
            </Box>
            
        </Flex>
        </Box>
    );
}

export default SingleScan;