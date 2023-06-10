import { useState } from "react";
import { FormErrorMessage, Box, Button, VStack, FormControl, FormHelperText, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import { Form, NavLink, redirect, Navigate } from "react-router-dom";
import InputField from "../components/common/InputField";
import * as Yup from 'yup'
import { Formik, Field } from "formik";
import { useSignup } from "../hooks/useSignup";
// import { auth } from "../services/authService";

const Login = () => {
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (values, actions) => {
    console.log(values)
    const res= await signup(values)
    // console.log(res)
    if (res){
      actions.resetForm();
      window.location='/dashboard' 
    }
      
    // firstName,lastName,password,email
  }
  return (
    <Formik
      initialValues={{ firstName: '', lastName: "", email: "", password: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required()
          .min(3)
          .label("First name"),
        lastName: Yup.string()
          .required()
          .min(3)
          .label("Last name"),
        password: Yup.string()
          .required()
          .min(6)
          .label("Password"),
        email: Yup.string().required().email().label("Email"),
      })}
      onSubmit={handleSubmit}
    >
    {formik => (
    <Box py="10">
      <Box maxW="md" mx="auto" p="6" bg="white" borderRadius="lg" boxShadow="lg" textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" mb="2">Log in to your account</Text>
            <VStack
              as="form"
              justifyContent="center"
              onSubmit={formik.handleSubmit}
            >
              <InputField label= 'First name' name="firstName" placeholder="Enter first name" type="text" />
              <InputField label= 'Last name' name="lastName" placeholder="Enter last neme" type="text" />
              <InputField label= 'email' name="email" placeholder="Enter email" type="email" />
              <InputField
                label= "Password"
                name="password"
                type="password"
                placeholder="enter password"
              />
               <Button type="submit" colorScheme="blue" width='60%'>Sign up</Button>
            </VStack>
            {error && <Text color='red.400'>{error} </Text>}
        <NavLink to='/login'>
          <Text>Already have an account</Text>
        </NavLink>
      </Box>
    </Box>
          )}
  </Formik>
  );
};

// export const saveUser= async ({request}) => {
//   const res= await request.formData()
//   const submission= {
//     email: res.get('email'),
//     password: res.get('password')
//   }
  
//   await login(submission.email, submission.password)
//   return null
// }

export default Login;