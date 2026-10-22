import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import { getAllproducts } from '../Redux/slices/ProductSlice';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Product() {
  const{loading,allproducts,error}=useSelector (state=>state.productReducer)
  const dispatch=useDispatch()

  //pagination
  const[currentPage,setcurrentPage]=useState(1)
  const productsPerPage=8
  const totalPages=Math.ceil(allproducts?.length/productsPerPage)
  const currentPageLastIndex=currentPage*productsPerPage
  const currentPageFirstIndex=currentPageLastIndex - productsPerPage
  const visibleProductArray =allproducts?.slice(currentPageFirstIndex,currentPageLastIndex)

  useEffect(()=>{
    dispatch(getAllproducts())
  },[])

  const navigateNextPage=()=>{
    currentPage !=totalPages&&setcurrentPage(currentPage+1)
  }
  const navigatePrevPage=()=>{
    currentPage !=1 && setcurrentPage(currentPage-1)
  }

  return (
    <>
      <Header insideHeader />
      <div className='m-5'>
       {
        loading?
        <div className='text-center py-5 fw-bolder'>Loading....</div>
        :
         <div className='row pt-5'>
          {/*duplicate column*/}
         {
          allproducts.length>0 ?
          visibleProductArray?.map(Product=>(
             <div key={Product?.id} className="col-md-3 mb-2">
            {/*card*/}
            <Card className='rounded shadow'>
              <Card.Img style={{height:'250px'}} variant="top" src={Product.thumbnail} />
              <Card.Body className='text-center'>
                <Card.Title>{Product?.title}</Card.Title>
                <Link to={`/product/${Product?.id}`} className='btn btn-primary'>View more.....</Link>
                
              </Card.Body>
            </Card>
          </div>
          ))
          :
          <div className='text-center py-5 fw-bolder' >products not found!!!</div>
         }
        </div>
       }
       <div className='text-center my-3 fs-5 fw-bolder'>
         <button onClick={navigatePrevPage} className='btn'>
           <FontAwesomeIcon icon={faBackward} />
        </button>
          {currentPage}of {totalPages}
        <button onClick={navigateNextPage} className='btn'>
           <FontAwesomeIcon icon={faForward} />
        </button>

       </div>
      </div>
    </>
  )
}

export default Product