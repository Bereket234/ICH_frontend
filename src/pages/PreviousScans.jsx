import React, { useState, useEffect, useCallback, useRef } from "react";
import { Heading, Box, Flex, Button } from "@chakra-ui/react";
import SingleScan from "../components/common/SingleScan";
import { getPreviousScans, getZipData } from "../services/imageService";
import { DownloadIcon } from "@chakra-ui/icons";
import { useAuthContext } from './../hooks/useAuthContext';

const PreviousScans = () => {
const [scanData, setScanData] = useState([]);
const {user}= useAuthContext()
const [file, setFile] = useState(null);
const downloadLinkRef = useRef(null);
const clickDownloadLink = useCallback(() => downloadLinkRef.current.click(), []);

const handleDownload = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/api/predict/get-zip-data/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${user}`

        },
      })
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(
            new Blob([blob]),
          );
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute(
            'download',
            `FileName.pdf`,
          );
      
          // Append to html link element page
          document.body.appendChild(link);
      
          // Start download
          link.click();
      
          // Clean up and remove the link
          link.parentNode.removeChild(link);
    })
    .catch(e=> console.log(e))
};

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
        <Flex w='100%' justifyContent='space-between'>
            <Heading mb={4}>Previous Scans</Heading>
            <Button onClick={handleDownload} leftIcon={<DownloadIcon />}>
                Download
            </Button>
            {file && (
                    <a
                        href={URL.createObjectURL(file)}
                        download="filename.zip"
                        style={{ display: "none" }}
                        ref={downloadLinkRef}
                    >
                        Download
                    </a>
                )}
        </Flex>
        {scanData.map((item)=> {
            return <SingleScan key={item.id} image= {{mask:item.mask, originalImage: item.originalImage, predictedImage: item.predictedImage}} /> 
        })}
    </Box>
);
};

export default PreviousScans