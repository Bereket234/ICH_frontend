import React, { useState, useEffect } from "react";
import { Heading, Box } from "@chakra-ui/react";
import { getBookmarks } from '../services/imageService';
import SingleScan from "../components/common/SingleScan";


function Bookmaks(props) {
    const [scanData, setScanData] = useState([]);

    useEffect(() => {
        getBookmarks()
        .then(res=>  {
            console.log(res)
            setScanData(res.data)
        })
        .catch(err=> console.log(err))
    }, []);
    return (
        <Box>
            <Heading mb={4}>Bookmarks</Heading>
            {scanData.map((item)=> {
                return <SingleScan key={item.id} image= {{mask:item.mask, originalImage: item.originalImage, predictedImage: item.predictedImage}} /> 
            })}
        </Box>
    );
}

export default Bookmaks;