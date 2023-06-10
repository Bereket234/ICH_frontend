import React, { useEffect, useState } from "react";
import { Progress, Heading, Box, Image, Flex, Text } from "@chakra-ui/react";
// import brainImage from "./brain.jpg";
import { useImagesContext } from "../hooks/useImageContext";
import { useUploadImage } from "../hooks/useImage";
import SingleScan from "../components/common/SingleScan";
import ProgressBars from "../components/common/ProgressBars";



const ImageResult = () => {
  const {image}= useImagesContext()
  const {isLoading}= useUploadImage()
  const hemorrhageTypes = [
    { name: "Epidural", percentage: (image["epidural"] * 100) },
    { name: "Subdural", percentage: (image["subdural"] * 100) },
    { name: "Subarachnoid", percentage: (image["subarachnoid"] * 100) },
    { name: "Intraventricular", percentage: (image["intraventricular"] * 100) },
    { name: "Intraparenchymal", percentage: (image["intraparenchymal"] * 100) },
  ];


  if (!image || isLoading){
    return(<Box>processing...</Box>)
  }

  return (
    <Flex justifyContent='center' alignItems='center' flexDirection='column'>
      <Heading mb={4}>Prediction</Heading>
      <SingleScan image= {image}/>
      <ProgressBars data= {hemorrhageTypes}/>
    </Flex>
  );
};

export default ImageResult;