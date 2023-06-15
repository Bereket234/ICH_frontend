import { Heading, Box, Flex } from "@chakra-ui/react";
// import brainImage from "./brain.jpg";
import { useImagesContext } from "../hooks/useImageContext";
import { useUploadImage } from "../hooks/useImage";
import SingleScan from "../components/common/SingleScan";
import ProgressBars from "../components/common/ProgressBars";
import UserCard from "../components/common/UserCard";



const ImageResult = () => {
  const {image}= useImagesContext()
  const {isLoading}= useUploadImage()
  const hemorrhageTypes = [
    { name: "Epidural", percentage: (image["epidural"]) },
    { name: "Subdural", percentage: (image["subdural"]) },
    { name: "Subarachnoid", percentage: (image["subarachnoid"]) },
    { name: "Intraventricular", percentage: (image["intraventricular"]) },
    { name: "Intraparenchymal", percentage: (image["intraparenchymal"]) },
  ];


  if (!image || isLoading){
    return(<Box>processing...</Box>)
  }

  console.log("logged here" ,image)
  return (
    <Flex w= "100%" justifyContent='center' alignItems='center' flexDirection='column'>
      <Heading mb={4}>Prediction</Heading>
      <UserCard image= {image}/>
      <SingleScan image= {image}/>
      <ProgressBars data= {hemorrhageTypes}/>
    </Flex>
  );
};

export default ImageResult;