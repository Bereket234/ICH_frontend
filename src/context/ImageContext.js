import { createContext, useReducer } from 'react'

export const ImagesContext = createContext()

export const imagesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PREDICTION': 
      return {
        image: action.payload
      }
    
    default:
      return state
  }
}

export const ImagesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(imagesReducer, {
    image: null
  })

  return (
    <ImagesContext.Provider value={{...state, dispatch}}>
      { children }
    </ImagesContext.Provider>
  )
}