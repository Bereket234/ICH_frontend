import React, { useState, useEffect } from "react";
import { Heading, Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

import { getPatients } from "../services/patientService";
import { useNavigate } from "react-router-dom";

const PatientList = () => {
    const navigate= useNavigate()
    const [scanData, setScanData] = useState([]);

        useEffect( () =>  {
        getPatients()
        .then(res=> {
            console.log(res)
            setScanData(res.data)

        })
        .catch(err=> console.log(err))

    }, []);

    const handleSelect= (id)=> {
        navigate(`/dashboard/patient-list/${id}`)
        // history.push(`/`);
    }

    return (
        <Box>
            <Heading mb={4}>Patient List</Heading>
            <Table variant='striped'>
                <Thead>
                    <Tr>
                        <Th>Card Number</Th>
                        <Th>Patient Name</Th>
                        <Th>Age</Th>
                        <Th>Sex</Th>
                        <Th>Phone Number</Th>
                        <Th>Number of Images</Th>
                        <Th>Date</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {scanData.map((scan) => (
                        <Tr cursor='pointer' _hover='' key={scan.id} onClick={()=> {handleSelect(scan.id)}}>
                            <Td>{scan.cardNumber}</Td>
                            <Td>{scan.name}</Td>
                            <Td>{scan.age}</Td>
                            <Td>{scan.sex}</Td>
                            <Td>{scan.phone}</Td>
                            <Td>{scan.imageCount}</Td>
                            <Td>{scan.registeredDate.slice(0, 10)}</Td>
                        </Tr>  
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default PatientList