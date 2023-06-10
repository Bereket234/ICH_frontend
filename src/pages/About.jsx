import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Box w= '60%' ml="15em">
      <Heading mb={4}>About Our Project</Heading>
      <Text mb={4}>Our project aims to improve the identification of intracranial hemorrhage through the use of machine learning. By developing a model that can accurately identify hemorrhage from medical imaging data, we hope to enable earlier and more accurate diagnoses, leading to better patient outcomes and potentially even saving lives.</Text>
      <Text mb={4}>In addition to the machine learning model, we're also creating a website that integrates the model and creates an environment for physicians to share data with each other. By enabling physicians to collaborate more effectively and make better-informed decisions, we hope to improve the accuracy and effectiveness of the model while also advancing the field of medicine as a whole.</Text>
      <Text mb={4}>We're a team of dedicated researchers and developers who are passionate about leveraging technology to improve healthcare outcomes. We believe that our project has the potential to make a real difference in the lives of patients and physicians alike, and we're excited to see where it takes us.</Text>
    </Box>
  );
};

export default About;