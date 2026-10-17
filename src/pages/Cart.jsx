import React from 'react'
import Header from '../components/Header'
import { width } from '@fortawesome/free-brands-svg-icons/fa11ty'
import { Link } from 'react-router-dom'


function Cart() {
  return (
    <>
    <Header/>
    <div className="container pt-5">
      <h1 className='text-primary my-5'>Cart summary</h1>
      <div className="row mb-5">
       <div className='col-md-8 border rounded p-5'>
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Title</td>
                <td><img width={'50px'} height={'50px'} className='img-fluid' src="https://imgs.search.brave.com/rkc5Fnbc1htZgaJ6KjGW6rdQ-L57V1aBU9WFN3x3kRk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFqT1ZnTEhZUUwu/anBn" alt="product Image" /></td>
                <td>
                  <div className='d-flex'>
                    <button className='btn fs-1'>-</button>
                    <input style={{width:'50px'}} type="text" className='form-control' value={10} readOnly />
                    <button className='btn fs-1'>+</button>
                  </div>
                </td>
                <td>$30</td>
                <td> <button className='btn text-danger fs-4'>x</button></td>
              </tr>
            </tbody> 
            </table>
            <div className='float-end mt-3'>
              <button className='btn btn-danger'>Empty Cart</button>
              <Link to={'/'} className='btn btn-info ms-5'>Shop More</Link>
            </div>
       </div>
       <div className='col-md-4'>
        <div className='rounded p-5 shadow border'>
          <h3>Total <span>5</span>Items</h3>
          <h3>Total Amount: <span className='text-danger'>$99999</span></h3>
          <hr />
          <div className='d-grid'>
            <button className='btn btn-success'>CHECKOUT</button>

          </div>

        </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default Cart