import React from 'react'
import ProductData from './ProductData'
import { Container } from 'react-bootstrap'
import Loader from './Loader'

const ProductItem = ({products}) => { 
  return (
    <>
    <Container className='mt-5'>
      {products.length==0 && <Loader/>}
      <div className='row'>
         {products.map((product)=><ProductData key={product.id} product={product} />)}
      </div>
      </Container>
    </>
  )
}

export default ProductItem
