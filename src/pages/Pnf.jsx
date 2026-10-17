import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img className='w-25' src="https://imgs.search.brave.com/v49vF-GcuOZKxM5a6SqccTOW88aqeuzCOxzl4tF5Sj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdmVjdG9yLWls/bHVzdHJhdGlvbi1h/Ym91dC1jb25jZXB0/LW5vLWl0ZW1zLWZv/dW5kLW5vLXJlc3Vs/dHMtZm91bmRfNjc1/NTY3LTY2NjUuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MA" alt="404 Image" />
      <h1 className='mt-5'>WE ARE SORRY.....</h1>
      <Link to={'/'} className='btn btn-info rounded'>Back to Home</Link>
    </div>
  )
}

export default Pnf