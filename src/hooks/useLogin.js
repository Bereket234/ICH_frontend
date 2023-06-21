import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from './useAuthContext'
import { auth } from '../services/authService'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate= useNavigate()


  const login = (username, password) => {
    setIsLoading(true)
    setError(null)

    auth(username, password)
    .then(response=> {
      const {data}= response
      // save the user to local storage
      localStorage.setItem('user', data.access)

      // update the auth context
      dispatch({type: 'LOGIN', payload: data.access})

      // update loading state
      setIsLoading(false)
      navigate('/dashboard')
      return response

    })
    .catch(e=> {
      console.log('error')
      setIsLoading(false)
      setError("Please check your email and password!")
      return null
    })
    
    // console.log(res)
    //  fetch('http://localhost:8000/api/token/', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: { email, password }
    // })
    // axios.post('http://192.168.43.157:8000/api/token/', { username, password })
    // .then(res => console.log(res))
    // .catch(e=> console.log(e.message))
    // console.log(res)
    // const json = await response.json()
    // if (!data) {
    //     console.log('error')
    //     setIsLoading(false)
    //     setError("Wrong cridetials ")
    // }
    // if (data) {
        
    //     // console.log(response)
        
    // }
  }

  return { login, isLoading, error }
}