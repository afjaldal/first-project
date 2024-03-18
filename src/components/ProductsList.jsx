import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { Allproducts } from '../api'

const ProductsList = () => {
  let [products,setProducts]=useState([])
  useEffect(()=>{ getProductData() },[])
  let getProductData=async()=>{
    try{
      let res= await Allproducts()
      setProducts(res.data)
    }
    catch(err){toast.error(err)}
}
  return (
    <><ProductItem products={products}/></>
  )
}

export default ProductsList
