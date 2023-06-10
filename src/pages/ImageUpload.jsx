import React, { useState } from 'react';
import { Box, Button, Container, Flex, Heading, Image, Text, background } from '@chakra-ui/react';
import axios from 'axios'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import { useUploadImage } from '../hooks/useImage';
import { useImagesContext } from '../hooks/useImageContext';

const ImageUploadPage = () => {
  const {uploadImage, isLoading, error}= useUploadImage()
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const {image}= useImagesContext()
  const navigate= useNavigate()

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = async () => {
    // const formData = new FormData();
    // formData.append('image', selectedImage);
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('patient', 2)
    await uploadImage(formData)
    
    // You can make an API call here to send the image to the server for processing
  };

  return (
    <Container maxWidth="md">
      <Box mt={10}>
        <Heading as="h1" mb={5} textAlign="center">
          Image Upload
        </Heading>
        
        <Flex
          borderWidth="2px"
          borderRadius="lg"
          p={8}
          textAlign="center"
          borderStyle="dashed"
          minW="50%"
          mx="auto"
          color="gray.500"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          {selectedImage ? (
            <>
            <Image src={previewImage} alt="Selected Image" mx="auto" mb={4} />
            <span>Selected Image: {selectedImage.name}</span>
            <br />
            <Button cursor='pointer' mt={2} colorScheme="red" onClick={()=> setSelectedImage(null)} as="label">
                Drop Image
              </Button>
            </>
          ) : (
            <>
              <Flex  
              height='50vh' 
              w= '60vw'
              border='5px dashed lightBlue' 
              borderRadius='50px'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              alignSelf='center'
              >
                <Box></Box>
                <span>Drag and drop an image here, or</span>
                <br />
                <Button cursor='pointer' mt={2} colorScheme="blue" as="label" width={300}>
                  Browse from Device
                  <input type="file" required onChange={handleImageUpload} accept="image/*" style={{ display: 'none' }} />
                </Button>
              </Flex>
              
            </>
          )}
        </Flex>
        <Button
          mt={4}
          isLoading= {isLoading}
          colorScheme="blue"
          onClick={handleUpload}
          disabled={!selectedImage}
          display="block"
          mx="auto"
          cursor='pointer'
        >
          Upload
        </Button>
      </Box>
    </Container>
  );
};

export default ImageUploadPage;