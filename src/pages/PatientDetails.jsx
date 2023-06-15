import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPatinetData } from '../services/imageService';
import SingleScan from '../components/common/SingleScan';
import UserCard from '../components/common/UserCard';
import { Box, Heading } from '@chakra-ui/react';

function PatientDetails() {
    const {id} = useParams()
    const [image, setImage]= useState([])
    useEffect(() => {
        getPatinetData(id)
        .then(res=> {
            console.log(res.data)
            setImage(res.data)
        })
        .catch(err=> console.log(err))
    }, [id])
    console.log(image)
    if (!image){
        return(<Box>processing...</Box>)
    }
    return (
        <Box>
            <Heading mb={4}>Previous Scans</Heading>
            {image.length > 0 && <UserCard image= {image&& image[0]}/>}
            {image.map((item)=> {
                return <SingleScan key={item.id} image= {item} /> 
            })}
        </Box>
    );
}

export default PatientDetails;