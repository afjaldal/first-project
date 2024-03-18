import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const ProductData = ({product}) => {
  return (
    <div className='col-md-3 mb-3'>
        <div className='card'>
           <img src={product.image}  className='card-img-top' height='200px'/>
           <div className='card-body'>
                <p className='card-text'>
                    {product.name}<br/>
                    {product.stock}<br/>
                    ${product.price}
                </p>
                <Button variant='primary' className="me-2" >Add to cart</Button>
                   </div>
        </div>
    </div>
  )
}

export default ProductData
