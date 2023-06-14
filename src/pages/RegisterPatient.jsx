import React, { useState } from "react";
import { Heading, FormControl, FormLabel, Input, Textarea, Select, Button, Flex, Box } from "@chakra-ui/react";
import { addPatient } from "../services/patientService";

const RegisterPatient = () => {
const [formData, setFormData] = useState({
        name: "",
        cardNumber: "",
        age: "",
        sex: "",
        phone: "",
        description: "",
    });

const handleInputChange = (event) => {
const { name, value } = event.target;
setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (event) => {
event.preventDefault();
// Replace with code to submit the form data to your backend API
await addPatient(formData)
setFormData({
    name: "",
    cardNumber: "",
    age: "",
    sex: "",
    phone: "",
    description: "",
    })
};

return (
    <Box>
        <Heading mb={4}>Register Patient</Heading>
        <Flex justifyContent="center">
            <Box width="80%">
                <form onSubmit={handleSubmit}>
                    <FormControl mb={4}>
                            <FormLabel>Name</FormLabel>
                            <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                        </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Card Number</FormLabel>
                        <Input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Age</FormLabel>
                        <Input type="number" name="age" value={formData.age} onChange={handleInputChange} />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Sex</FormLabel>
                        <Select name="sex" value={formData.sex} onChange={handleInputChange}>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Select>
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Phone Number</FormLabel>
                        <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Description of Patient</FormLabel>
                        <Textarea name="description" value={formData.description} onChange={handleInputChange} />
                    </FormControl>
                    <Button type="submit" colorScheme="blue">Submit</Button>
                </form>
            </Box>
        </Flex>
    </Box>
);
};

export default RegisterPatient;