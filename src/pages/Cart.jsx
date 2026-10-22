import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { width } from '@fortawesome/free-brands-svg-icons/fa11ty'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementcart, emptyCart, incrementcart, removeCart } from '../Redux/slices/cartSlice'
import Swal from 'sweetalert2'




function Cart() {
   const userCart = useSelector(state => state.cartStoreReducer) 
   const dispatch=useDispatch()
   const[cartTotal,setCartTotal]=useState(0)
   const navigate=useNavigate()

   useEffect(()=>{
    setCartTotal(userCart?.reduce((acc,cur)=>acc+cur.totalprice,0))
   },[userCart])

   const handleDecrementQyantity=(product)=>{
    if (product.quantity>1) {
      dispatch(decrementcart(product.id))
    }else{
      dispatch(removeCart(product.id))
    }
   }

   const handleCheckout=()=>{
    dispatch(emptyCart())
      Swal.fire({
      title: "Order placed successfully!!!",
      text: "Thank you for the purchase!!",
      icon: "success",
      confirmButtonText:"Shop More "
    });
    navigate('/')

   }
  return (
    <>
    <Header/>
    {
      userCart?.length>0?
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
             {
              userCart?.map((item,index)=>(
                 <tr key={item?.id}>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td><img width={'50px'} height={'50px'} className='img-fluid' src={item.thumbnail} alt="product Image" /></td>
                <td>
                  <div className='d-flex'>
                    <button onClick={()=>handleDecrementQyantity(item)} className='btn fs-1'>-</button>
                    <input style={{width:'50px'}} type="text" className='form-control' value={item?.quantity} readOnly />
                    <button onClick={()=>dispatch(incrementcart(item?.id))} className='btn fs-1'>+</button>
                  </div>
                </td>
                <td>{item?.totalprice}</td>
                <td> <button onClick={()=>dispatch(removeCart(item?.id))} className='btn text-danger fs-4'>x</button></td>
              </tr>
              ))
             }
            </tbody> 
            </table>
            <div className='float-end mt-3'>
              <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger'>Empty Cart</button>
              <Link to={'/'} className='btn btn-info ms-5'>Shop More</Link>
            </div>
       </div>
       <div className='col-md-4'>
        <div className='rounded p-5 shadow border'>
          <h3>Total <span>{userCart?.length}</span>Items</h3>
          <h3>Total Amount: <span className='text-danger'>${cartTotal}</span></h3>
          <hr />
          <div className='d-grid'>
            <button onClick={handleCheckout} className='btn btn-success'>CHECKOUT</button>

          </div>

        </div>
       </div>
      </div>
    </div>
    :
    <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
              <img src="https://imgs.search.brave.com/_7sYFSffUVYspUYJzJxka4IPC5_ZQdbD-CUW2K0yBNA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTQuZ2lwaHkuY29t/L21lZGlhL3YxLlky/bGtQVGM1TUdJM05q/RXhkR3A1Ympjd1lX/dDNjV2hzTVdkNGVY/VjNPREo1YzNodWFE/bGphM2R1WkhoeGVt/bDBNelYyTkNabGNE/MTJNVjluYVdaelgz/TmxZWEpqYUNaamRE/MW4vU01FR2owcGI1/ZVVLY25vdDh4L2dp/cGh5LmdpZg.gif" alt="wishlist" />
              <h1>your wishlist is empty!!!</h1>
              <Link to={'/'} className=' btn btn-primary'>add more....</Link>
            </div>
    }
    </>
  )
}
export default Cart
