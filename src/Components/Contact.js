
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';


const Contact = () => {


	const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
	// alert('Message Sent')
  };

	

  return (
	  <>
		  <article className='container pb-5'>
			<div className='pt-5'>
				<h2>
					Contact Me
				</h2>
				<p>
					Hi there, contact me to ask me about anything you have in mind.
				</p>
			</div>
			<Form noValidate validated={validated} onSubmit={handleSubmit} className='pb-4'>
				<Form.Group className="mb-3 modInputFlex" controlId="formBasicName">
						<div className='modInput'>
							<Form.Label>First name</Form.Label>
							<Form.Control id='first_name' className='modInput' type="text" placeholder="Enter your first name"  required/>
						</div>
						<div className='modInput'>
							<Form.Label>Last Name</Form.Label>					  
							<Form.Control id='last_name' className='modInput' type="text" placeholder="Enter your last name"  required />	
						</div>				  
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control id='email' type="email" placeholder="yourname@email.com"  required />
				</Form.Group>

					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Message</Form.Label>
					<Form.Control id='message' as="textarea" rows={3} placeholder="Send me a message and I'll reply you as soon as possible..."  required />
					</Form.Group>
				
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="You agree to providing your data to {name} who may contact you."   required/>
				</Form.Group>
				
				  <Button id='btn__submit' variant="primary" type="submit" className='w-100'>
				Send message
				</Button>
			</Form>		
		  </article>
			<Footer/>	  
		  
	 </>
  )
}

export default Contact
