import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addproduct, getProduct, updateproduct } from '../../api'

const AddProduct = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    let categories=['women','men','kids','grocery','electronics']
    let [product,setProduct]=useState({category:'',name:'',brand:'',price:'',stock:'',description:''})
       useEffect(()=>{
        if(id){getProduct(id).then(res=>{setProduct(res.data) })
        }
        else {setProduct({category:'',name:'',brand:'',price:'',stock:'',description:''})}
    },[id])

    let handleChange=(e)=>{
        // console.log(e.target.files[0])
        setProduct({...product,image:`/src/assets/images/${e.target.files[0].name}`})
    }

    let handleSubmit=async(e)=>{
        e.preventDefault()
        // alert(JSON.stringify(product))
        // try{
        //     await axios.post("https://65cf0df7bdb50d5e5f5a617a.mockapi.io/products",product)
        //     toast.success("product added")
        //     navigate('/admin/viewproducts')
        // }
        // catch(err){
        //     toast.error(err)
        // }

        // try{
        //     await fetch("https://65cf0df7bdb50d5e5f5a617a.mockapi.io/products",{
        //         method:"POST",
        //         headers:{'content-type':'application/json'},
        //         body:JSON.stringify(product)
        //     })
        //     toast.success("product added")
        //     navigate('/admin/viewproducts')
        // }
        // catch(err){
        //     toast.error(err)
        // }

        if(!id){
         try{
                await addproduct(product)
                toast.success("product added")
                navigate('/admin/viewproducts')
            }
            catch(err){
                toast.error(err)
            }
        }
        else {
            try{
                await updateproduct(product)
                toast.success("product updated")
                navigate('/admin/viewproducts')
            }
            catch(err){
                toast.error(err)
            }
        }
    }
  return (
    <Container className='mt-5'>
        <Card>
            <Card.Header>
            <h1>{id ? "Edit ":"Add "} Product
                <Link to='/admin/viewproducts' variant='danger' className='btn btn-danger float-end'>View Products</Link>
            </h1>
            </Card.Header>
            <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                      <Form.Label>Category</Form.Label>
                      <Form.Select name="category" value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value })}>
                      <option value=''>Choose One</option>
                      {categories.map((c,i)=><option key={i}>{c}</option>)}                      
                      </Form.Select>
              </Form.Group>
              <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' value={product.name} onChange={(e)=>setProduct({...product,name:e.target.value })}></Form.Control>
                    </Form.Group>
                </Col>
                <Col> 
                 <Form.Group>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control name='brand' value={product.brand} onChange={(e)=>setProduct({...product,brand:e.target.value })}></Form.Control>
                    </Form.Group>
                    </Col>
              </Row>
              <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control name='price' type="number" value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value })}></Form.Control>
                    </Form.Group>
                </Col>
                <Col> 
                 <Form.Group>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control name='stock' type="number" value={product.stock} onChange={(e)=>setProduct({...product,stock:e.target.value })}></Form.Control>
                    </Form.Group>
                    </Col>
              </Row>
              <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" name="image" onChange={handleChange}></Form.Control>
              </Form.Group>
              {id && <Image src={product.image} height={50} width={50}/>}
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="description" value={product.description} onChange={(e)=>setProduct({...product,description:e.target.value })}/>
              </Form.Group>
              <Button variant='primary' type="submit" className="mt-3">{id? "Update " : "Add "} Product</Button>
          </Form>
            </Card.Body>
        </Card>
  </Container>
  )
}

export default AddProduct
