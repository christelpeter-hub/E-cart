
import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromwishlist } from '../Redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addTocart } from '../Redux/slices/cartSlice'



function Wishlist() {
  const dispatch = useDispatch()

  const userWishlist = useSelector(
    state => state.wishlistReducer
  )

  const userCart = useSelector(
    state => state.cartStoreReducer
  )

  // Keep your existing handleCart function here

 const handleCart = (product) => {
  const existingproduct = userCart?.find(
    item => item.id === product.id
  )

  dispatch(addTocart(product))

  Swal.fire({
    title: "Success",
    text: existingproduct
      ? `Product ${existingproduct.title} quantity incremented`
      : "Product added to cart",
    icon: "success",
    confirmButtonText: "OK"
  })
}
  
  return (
    <>
      <Header />

      <div className='container my-5'>
        {
          userWishlist?.length>0?
          <>
          <h1 className='pt-5 text-success'>User Wishlist</h1>
  
          <div className='row pt-5'>
  
            {/* Wishlist card */}
           {
            userWishlist?.map(item=>(
               <div key={item.id} className="col-md-3 mb-2">
              <Card className='rounded shadow'>
                <Card.Img
                  style={{ height: '300px', objectFit: 'cover' }}
                  variant="top"
                  src={item?.thumbnail}
                />
  
                <Card.Body className='text-center'>
                  <Card.Title>{item?.title}</Card.Title>
  
                  <div className='d-flex justify-content-evenly'>
                    {/* Remove from wishlist */}
                    <button onClick={()=>dispatch(removeFromwishlist(item?.id))}
                      className='btn text-danger fs-4'
                      title='Remove from wishlist'
                    >
                      <FontAwesomeIcon icon={faHeartCircleXmark} />
                    </button>
  
                    {/* Add to cart */}
                    <button onClick={()=>handleCart(item)}
                      className='btn text-success fs-4'
                      title='Add to cart'
                    >
                      <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            ))
           }
  
          </div>
        </>
        :
        <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
          <img src="https://imgs.search.brave.com/_7sYFSffUVYspUYJzJxka4IPC5_ZQdbD-CUW2K0yBNA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTQuZ2lwaHkuY29t/L21lZGlhL3YxLlky/bGtQVGM1TUdJM05q/RXhkR3A1Ympjd1lX/dDNjV2hzTVdkNGVY/VjNPREo1YzNodWFE/bGphM2R1WkhoeGVt/bDBNelYyTkNabGNE/MTJNVjluYVdaelgz/TmxZWEpqYUNaamRE/MW4vU01FR2owcGI1/ZVVLY25vdDh4L2dp/cGh5LmdpZg.gif" alt="wishlist" />
          <h1>your wishlist is empty!!!</h1>
          <Link to={'/'} className=' btn btn-primary'>add more....</Link>
        </div>
        }
        
      </div>
    </>
  )
}

export default Wishlist