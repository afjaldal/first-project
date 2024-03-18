import React, { useState } from 'react'
import { createContext } from 'react'

export const dataContext=createContext()

const ProductContext = ({children}) => {
    let [cartItem,setCartItem]=useState([])
    let [total,setTotal]=useState(0)
  return (
   <dataContext.Provider value={{cartItem,total}}>
        {children}
    </dataContext.Provider>    
)
}

export default ProductContext
