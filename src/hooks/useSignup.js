import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { register } from '../services/userService'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (user) => {
    setIsLoading(true)
    setError(null)
    console.log(user)
    register(user)
    .then(response=> {
      const {data}= response
      // save the user to local storage
      localStorage.setItem('user', data.access)

      // update the auth context
      dispatch({type: 'LOGIN', payload: data.access})

      // update loading state
      setIsLoading(false)
      return response

    })
    .catch(e=> {
      console.log('error')
      setIsLoading(false)
      setError("Pleas check your connection!")
      return null
    })
  }

  return { signup, isLoading, error }
}