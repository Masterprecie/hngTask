import React from 'react'
import image from '../img/image.png'
import git from '../img/git.png'
import slack from '../img/slack.png'
import Footer from './Footer'
import nav from '../img/share.png'
import nav1 from '../img/share1.png'

const Links = () => {
 	return (
		<>
			<main className='container-fluid ps-lg-0 pe-lg-0 ps-3 pe-3'>
				<div className='shareButton'>					
					<img src={nav} alt="" className='mobView'/>			
					<img src={nav1} alt="" className='webView'/>				
				</div>

				<div className='box text-center'>
					<img src={image} alt="" id='profile__img' />
					<h5>Annette Black</h5>
					<div className='link-section'>
						<div className='links'>
							<a href="https://twitter.com/home" id='twitter' className='mt-3' >Twitter Link</a>
						</div>

						<div className='links'>
							<a id='btn__zuri' href="https://training.zuri.team/">Design Books</a>
						</div>
						<div className='links'>
							<a id='books' href="http://books.zuri.team">Zuri Team</a>
						</div>

						<div className='links'>
							<a id='book__python' href="https://books.zuri.team/">Zuri Books</a>
						</div>
						<div className='links'>
							<a id='pitch' href="https://background.zuri.team">Python Books</a>
						</div>
						<div className='links'>
							<a id='book__design' href="https://books.zuri.team/design-rules">Background Check for Coders</a>
						</div>
						<div className='links'>
							<a id='contact' href="contact">Contact Me</a>
						</div>
					</div>

					<div className='mt-2 slack-flip d-flex align-items-center justify-content-center'>
						<div>
							<a id='slack' href="https://github.com/Masterprecie/hng-task0">
							<img src={git} alt="" className='me-3' />
						</a>
						</div>
						
						<div>
							<a id='slack' href="https://app.slack.com/client/T042F7V19Q8/D048X7D98BS">
							<img src={slack} alt="" />
						</a>
						</div>
						
					</div>
				</div>				
				<Footer/>			
			</main>
		</>
	)
};

export default Links