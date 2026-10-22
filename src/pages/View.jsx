
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { addTowishlist } from '../Redux/slices/wishlistSlice'
import { addTocart } from '../Redux/slices/cartSlice'

function View() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const dispatch=useDispatch()
  const userWishlist =useSelector(state=>state.wishlistReducer)
  const userCart =useSelector(state=>state.cartStoreReducer)
  
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        )
        setProduct(response.data)
        setError('')
      } catch (err) {
        setError('Unable to load product. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleWishlist=()=>{
    console.log("Inside handle wishlist");
    const existingproduct=userWishlist?.find(item=>item.id==product?.id)
    if (existingproduct){
      Swal.fire({
  title: "sorry!!!",
  text: "product aleready in wishlist",
  icon: "error",
  confirmButtonText:"ok"
});
    }
    else{
      dispatch(addTowishlist(product))
            Swal.fire({
  title: "success",
  text: "product added in wishlist",
  icon: "success",
  confirmButtonText:"ok"
});   
    }
  }
  const handleCart =()=>{
    const existingproduct=userCart?.find(item=>item.id==product?.id)
    dispatch(addTocart(product))
     Swal.fire({
  title: "success",
  text: existingproduct? `product${existingproduct.title} quantity Incremented`:"product Added to cart",
  icon: "success",
  confirmButtonText:"ok"
});   

  }


  return (
    <>
      <Header />

      <div className="container my-5 pt-5">
        {loading ? (
          <p className="text-center">Loading product...</p>
        ) : error ? (
          <p className="text-danger text-center">{error}</p>
        ) : product ? (
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid"
                src={product.thumbnail}
                alt={product.title}
                style={{ maxHeight: '350px', objectFit: 'contain' }}
              />

              <div className="d-flex justify-content-evenly mt-4 flex-wrap gap-2">
                <button onClick={handleWishlist} className="btn btn-info">
                  ADD TO WISHLIST
                </button>
                <button onClick={handleCart} className="btn btn-warning">
                  ADD TO CART
                </button>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <h1>{product.title}</h1>
              <h2 className="text-danger">${product.price}</h2>
              <h4>Brand: {product.brand}</h4>
              <h4>Category: {product.category}</h4>
              <p>Description: {product.description}</p>

              <h5>Client Reviews:</h5>
              {product.reviews?.length ? (
                product.reviews.map((item, index) => (
                  <div key={index} className="border rounded p-2 my-2">
                    <p>Name: {item.reviewerName}</p>
                    <p>Comment: {item.comment}</p>
                    <p>
                      Rating: {item.rating}{' '}
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-warning"
                      />
                    </p>
                  </div>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </div>
          </div>
        ) : (
          <p>Product not found.</p>
        )}
      </div>
    </>
  )
}

export default View
