import React, { useContext, useEffect, useState } from 'react'
import ProductsList from '../components/ProductsList'
import axios from 'axios'
import { dataContext } from '../ProductContext'

const Home = () => {
  let [mydata,setMyData]=useState([])
  const context=useContext(dataContext)
  // console.log(context)
  useEffect(()=>{ 
      getdata()
  },[])

  let getdata=async()=>{
    try{
      let res=await axios.get("https://jsonplaceholder.typicode.com/users")
      setMyData(res.data)
    }
    catch(err){
      console.log(err)
    }
  }
  return (
   <>
    <h1>Home Page</h1>
      {/* {mydata.map((item)=><h5 key={item.id}>{item.name}</h5>)} */}
    {/* <ProductsList/> */}
   </>
  )
}

export default Home
