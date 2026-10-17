import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function View() {
  return (
    <>
    <Header/>
    <div className="container my-5">
      <div className="row pt-5 align-items-center" style={{height:'80vh'}}>
        <div className="col-lg-6 text-center">
          <img className='img-fluid' src="https://imgs.search.brave.com/rkc5Fnbc1htZgaJ6KjGW6rdQ-L57V1aBU9WFN3x3kRk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFqT1ZnTEhZUUwu/anBn" alt="product Image" />
        <div className='d-flex justify-content-evenly mt-5'>
          <button className='btn btn-info rounded'>ADD TO WISHLIST</button>
          <button className='btn btn-warning rounded'>ADD TO CART</button>
        </div>
        </div>
        <div className="col-lg-6">
          <h1>Title</h1>
          <h2 className='text-danger'>$20</h2>
          <h4>Brand</h4>
          <h4>Category</h4>
          <h4>Description</h4>
          <h5>Client Reviews</h5>
          <div className='border-rounded p-2 shadow my-1'>
            <p><span className='fw-bolded'>Name: </span>message</p>
            <p>Rating:4 <FontAwesomeIcon icon={faStar} className='text-warning' /></p>
          </div>
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}

export default View