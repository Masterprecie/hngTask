import React from 'react'
import img1 from '../img/I4G.png'
import img2 from '../img/Vector.png'



const Footer = () => {
  return (
	  <>
		  <footer className='footer'>
			  <div className='footer-content'>
				  <div>				  
			  			<img src={img2} alt="" />
				  </div>
				  <div>
			  			<p>HNG Internship 9 Frontend Task</p>
				  </div>
			  		<div>
				  		<img src={img1} alt="" />
			  		</div>
			  </div>			  
			</footer>
	  </>
  )
}

export default Footer