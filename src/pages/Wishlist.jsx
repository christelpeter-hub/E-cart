
import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Wishlist() {
  return (
    <>
      <Header />

      <div className='container my-5'>
        <h1 className='pt-5 text-success'>User Wishlist</h1>

        <div className='row pt-5'>

          {/* Wishlist card */}
          <div className="col-md-3 mb-2">
            <Card className='rounded shadow'>
              <Card.Img
                style={{ height: '300px', objectFit: 'cover' }}
                variant="top"
                src="https://imgs.search.brave.com/rkc5Fnbc1htZgaJ6KjGW6rdQ-L57V1aBU9WFN3x3kRk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFqT1ZnTEhZUUwu/anBn"
              />

              <Card.Body className='text-center'>
                <Card.Title>Card Title</Card.Title>

                <div className='d-flex justify-content-evenly'>
                  {/* Remove from wishlist */}
                  <button
                    className='btn text-danger fs-4'
                    title='Remove from wishlist'
                  >
                    <FontAwesomeIcon icon={faHeartCircleXmark} />
                  </button>

                  {/* Add to cart */}
                  <button
                    className='btn text-success fs-4'
                    title='Add to cart'
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
    </>
  )
}

export default Wishlist