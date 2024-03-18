import React from 'react'
import { Container, Table } from 'react-bootstrap';

const Cart = () => {
  return (
    <Container className='mt-5 shadow p-3'>
        <Table striped bordered hover>
        <thead>
        <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
            <tr><td colSpan={7}>No Item in Cart</td> </tr>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
              </tbody>
        </Table>
  </Container>
);
}

export default Cart
