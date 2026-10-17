import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Product() {
  return (
    <>
      <Header />
      <div className='m-5'>
        <div className='row pt-5'>
          {/*duplicate column*/}
          <div className="col-md-3 mb-2">
            {/*card*/}
            <Card className='rounded shadow'>
              <Card.Img style={{height:'250px'}} variant="top" src="https://imgs.search.brave.com/rkc5Fnbc1htZgaJ6KjGW6rdQ-L57V1aBU9WFN3x3kRk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFqT1ZnTEhZUUwu/anBn" />
              <Card.Body className='text-center'>
                <Card.Title>Card Title</Card.Title>
                <Link to={'/product/id'} className='btn btn-primary'>View more.....</Link>
                
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product