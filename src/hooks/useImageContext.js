import { ImagesContext } from '../context/ImageContext'
import { useContext } from 'react'

export const useImagesContext = () => {
  const context = useContext(ImagesContext)

  if (!context) {
    throw Error('useImagesContext must be used inside an ImagesContextProvider')
  }

  return context
}