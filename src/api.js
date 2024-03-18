import axios from "axios"

// let productURL="https://65d5b57af6967ba8e3bc4c08.mockapi.io/first"
let productURL="https://65d5b57af6967ba8e3bc4c08.mockapi.io/products"

export const addproduct=(product)=>axios.post(productURL,product)

export const Allproducts=()=>axios.get(productURL)

export const deleteProduct=(id)=>axios.delete(`${productURL}/${id}`)

export const getProduct=(id)=>axios.get(`${productURL}/${id}`)

export const updateproduct=(product)=>axios.put(`${productURL}/${product.id}`,product)