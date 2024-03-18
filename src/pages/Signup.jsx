import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'
const Signup = () => {
    let initialState={username:'',email:'',password:'',cpassword:'',role:'user'}
    let[user,setUser]=useState({...initialState})
    let [isLoading,setIsLoading]=useState(false)
    let [errors,setErrors]=useState({});
    const navigate=useNavigate()
    let validations=(user)=>{
        let formerrors={}
        let pattern=/^([a-zA-Z0-9_\!\@\#\$\%\^\&\*\-\.]+)\@([a-zA-Z_0-9]+)\.([a-zA-Z]{3})$/
        if(user.username==''){
            formerrors.unamerr="username is required"  }
        if(user.email==''){formerrors.emailerr="email is required"  }
        else if(!pattern.test(user.email)){  formerrors.emailerr="invalid email"  }
        if(user.password==''){formerrors.pwderr="password is required"}
        if(user.cpassword ==''||user.password !=user.cpassword){
            formerrors.cpwderr="Passwords not same"
        }
        return formerrors }

    let handleSubmit=async(e)=>{
        e.preventDefault()
        let myerrors=validations(user)
        if(Object.keys(myerrors).length==0){
            setErrors({})
            setIsLoading(true)
            try{
                 await fetch("https://65d5b57af6967ba8e3bc4c08.mockapi.io/first",{
                   method:"POST",
                   headers:{'content-type':'application/json'},
                   body:JSON.stringify(user)
                })
                toast.success("Registered successfully")
                navigate('/login')
                setIsLoading(false)
            }
            catch(err){
                toast.error("Something went wrong...please try again!!")
                setIsLoading(false)
            }

        }
        else 
            setErrors(myerrors)
    }
  return (
    <Container className='shadow mt-5'>
        {isLoading && <Loader/>}
        <h1>Signup Page</h1><hr/>
    <Row>
        <Col xs={6}>
            <Image src="/src/assets/register.png" fluid/>
        </Col>
        <Col xs={6}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
                </Form.Group>
                {errors.unamerr && <span className='text-danger'>{errors.unamerr}</span>}
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
                </Form.Group>
                {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span>}
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
                </Form.Group>
                {errors.pwderr && <span className='text-danger'>{errors.pwderr}</span>}
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="cpassword" value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}/>
                </Form.Group>
                {errors.cpwderr && <span className='text-danger'>{errors.cpwderr}</span>}<br/>
                <Button variant='danger' className='mt-2' type="submit">Submit</Button>
            </Form>
            <p>Already an account?? <Link to='/login'>Login</Link></p>
        </Col>
    </Row>
    </Container>
  )
}

export default Signup
