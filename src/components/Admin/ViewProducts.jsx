import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Allproducts, deleteProduct } from '../../api'
import { Link } from 'react-router-dom'

const ViewProducts = () => {
    let [products,setProducts]=useState([])
    useEffect(()=>{
        getProductData()
    },[])

    let getProductData=async()=>{
        try{
          let res= await Allproducts()
          setProducts(res.data)
        }
        catch(err){toast.error(err)}
    }

    let handleClick=async(id)=>{
        if(window.confirm('are you sure to delete this??')){
            try{
                let res= await deleteProduct(id)
               toast.success("product deleted")
               getProductData()
              }
              catch(err){toast.error(err)}
        }
    }
  return (
        <Container className='mt-5 shadow p-3'>
                <h1>View Products
                <Link to='/admin/addproduct' variant='danger' className='btn btn-danger float-end'>Add Products</Link>
                </h1>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Brand</th><th>Price</th>
                    <th>Stock</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length==0 &&    <tr><td colSpan={8}>No Product Found</td></tr>}
                    {products.map((product,i)=>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.category}</td>
                            <td>{product.name}</td>
                            <td><img src={product.image}  width={50} height={50}/></td>
                            <td>{product.brand}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Button as={Link} to={`/admin/editproduct/${product.id}`} variant='success' className='me-2'><FaPenAlt/></Button>
                                <Button variant='danger' className='me-2' onClick={()=>handleClick(product.id)}><FaTrashAlt/></Button>
                            </td>
                        </tr>
                        )}
                </tbody>
                </Table>
        </Container>
  )
}

export default ViewProducts
