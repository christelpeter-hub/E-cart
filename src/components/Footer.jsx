import { faInstagram, faSquareFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightLong, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTruckArrowRight } from '@fortawesome/free-solid-svg-icons/faTruckArrowRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height:'300px'}} className='bg-primary d-flex justify-content-center align-items-center text-light flex-column p-5'>
    <div className='d-flex justify-content-evenly mb-5 w-100'>
      <div style={{width:'400px'}}>
        <h3><FontAwesomeIcon icon={faTruckArrowRight} />E CART</h3>
        <p>
              Designed and built with all the love in the world by
              the Luminar team with the help of our contributors.
            </p>
             <p>Code licensed Luminar, docs CC BY 3.0.</p>
             <p>Currently v5.3.2.</p>
      </div>
      <div className='d-flex flex-column'>
        <h3>Links</h3>
        <Link to={'/'} className='text-light text-decoration-none'>Home</Link>
        <Link to={'/wishlist'} className='text-light text-decoration-none'>Wishlist</Link>
        <Link to={'/cart'} className='text-light text-decoration-none'>Cart</Link>
      </div>
      <div className='d-flex flex-column'>
        <h3>Guides</h3>
        <Link to={'/'} className='text-light text-decoration-none'>Bootstrap</Link>
        <Link to={'/wishlist'} className='text-light text-decoration-none'>React</Link>
        <Link to={'/cart'} className='text-light text-decoration-none'>Redux</Link>
      </div>
       <div className='d-flex flex-column'>
        <h2>Contact Us</h2>
        <div className='d-flex mb-2'>
          <input type="text" placeholder='Email Here' className='form-control' />
          <button className='btn'><FontAwesomeIcon className='text-light' icon={faArrowRightLong} /> </button>
        </div>
        <div className='d-flex justify-content-between align-items-center mt-4 fs-5'>
          <FontAwesomeIcon icon={faSquareFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faPhone} />
        </div>

       </div>
    </div>
    </div>
  )
}

export default Footer