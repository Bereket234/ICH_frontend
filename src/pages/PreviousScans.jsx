import React, { useState, useEffect, useCallback, useRef } from "react";
import { Heading, Box, Flex, Button } from "@chakra-ui/react";
import SingleScan from "../components/common/SingleScan";
import { getPreviousScans } from "../services/imageService";
import { DownloadIcon } from "@chakra-ui/icons";

const PreviousScans = () => {
const [scanData, setScanData] = useState([]);
const [file, setFile] = useState(null);
const downloadLinkRef = useRef(null);
const clickDownloadLink = useCallback(() => downloadLinkRef.current.click(), []);

const handleDownload = () => {
  fetch("https://dummyfileapi.com/api/download")
    .then(response => response.blob())
    .then(blob => {
      setFile(blob);
      clickDownloadLink();
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