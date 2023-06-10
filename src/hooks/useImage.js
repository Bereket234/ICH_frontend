import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { imageUpload } from '../services/imageService'
import { useImagesContext } from './useImageContext'
import { useNavigate } from 'react-router'

export const useUploadImage = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useImagesContext()
  const navigate= useNavigate()

  const uploadImage = (data) => {
    setIsLoading(true)
    setError(null)

    imageUpload(data)
    .then(response=> {
      const {data}= response
      console.log(data)
      // update the auth context
      dispatch({type: 'SET_PREDICTION', payload: data})

      // update loading state
      setIsLoading(false)
      navigate('/dashboard/result')

    })
    .catch(e=> {
      console.log('error')
      setIsLoading(false)
      setError("Please check your connection!")
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

  return { uploadImage, isLoading, error }
}