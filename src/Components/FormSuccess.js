import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../img/form-success.png'

const FormSuccess = () => {
  return (
	  <>
		  <div className='contaner'>
			  <div className='container text-center success'>
				  <img src={img} alt="" />
				  <h1>Message Sent!!!</h1>	
				  <Button  variant="secondary" type="submit" className='w-25 mb-4' > <Link to='/' className='home'> Back</Link>
			
				</Button>

			  </div>
			  

	  </div>
	  
	  </>
  )
}

export default FormSuccess