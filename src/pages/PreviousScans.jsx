import React, { useState, useEffect } from "react";
import { Heading, Box } from "@chakra-ui/react";
import SingleScan from "../components/common/SingleScan";
import { getPreviousScans } from "../services/imageService";

const PreviousScans = () => {
const [scanData, setScanData] = useState([]);

useEffect(() => {
    getPreviousScans()
    .then(res=>  {
        console.log(res)
        setScanData(res.data)
    })
    .catch(err=> console.log(err))
}, []);
return (
    <Box>
        <Heading mb={4}>Previous Scans</Heading>
        {scanData.map((item)=> {
            return <SingleScan key={item.id} image= {{mask:item.mask, originalImage: item.originalImage, predictedImage: item.predictedImage}} /> 
        })}
    </Box>
);
};

export default PreviousScans