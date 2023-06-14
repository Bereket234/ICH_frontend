import React from 'react';
import { Progress, Box, Text } from "@chakra-ui/react";



function ProgressBars({data}) {
    return (
        <Box w='100%' pt={50}>
            {data.map((item) => (
                <Box key={item.name} mb={4} width='70%'>
                    <Text mb={2}>{item.name} <Box as= 'span' display='inline' fontWeight='600' fontSize={18}>{item.percentage}%</Box></Text>
                    <Progress borderRadius='15px' height='42px' value={item.percentage} label={`${item.percentage}%`}/>       
                </Box>
            ))}
        </Box>
    );
}

export default ProgressBars;