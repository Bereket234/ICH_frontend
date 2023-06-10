import { useState } from "react";
import { FormErrorMessage, Box, Button, VStack, FormControl, FormHelperText, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import { Form, NavLink, redirect, Navigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import InputField from "../components/common/InputField";
import * as Yup from 'yup'
import { Formik, Field } from "formik";
// import { auth } from "../services/authService";

const Login = () => {
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (values, actions) => {
    
    const res= await login(values.email, values.password)
    if (res){
      actions.resetForm();
      window.location='/dashboard' 
    }
      
  }
  console.log(isLoading)
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        password: Yup.string()
          .required("Password required")
          .min(8),
        email: Yup.string().required("email required"),
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
              <InputField label= 'Email address' name="email" placeholder="enter email" type="text" />

              <InputField
                label= "Password"
                name="password"
                type="password"
                placeholder="enter password"
              />
              <Button isLoading= {isLoading} loadingText='Submitting' type="submit" colorScheme="blue" width='60%'>Sign in</Button>
            </VStack>
            {error && <Text color='red.400'>{error} </Text>}
        <NavLink to='/register'>
          <Text>create new account</Text>
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