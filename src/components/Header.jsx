
import { faCartPlus,faHeart, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { serachProduct } from '../Redux/slices/ProductSlice'




function Header({insideHeader}) {
  const dispatch=useDispatch()
  const userWishlist =useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state => state.cartStoreReducer)
  console.log(insideHeader);
  
  return (
   <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand ><Link to={'/'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faTruckArrowRight} />  ECART</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            { insideHeader && <Nav.Item className='me-4'> <input onChange={e=>dispatch(serachProduct(e.target.value))} type="text" className='form-control rounded' placeholder='Search Products Here...' /></Nav.Item>}
            <Link to={'/wishlist'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faHeart} className='text-danger' />wishlist <Badge pill bg="secondary">{userWishlist?.length}</Badge></Link>
           <Link to={'/cart'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faCartPlus} className='text-success' />Cart <Badge pill bg="secondary">{userCart?.length}</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header