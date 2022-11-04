
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';


const Contact = () => {

	const initialValue={
	firstName: '',
	lastName: '',
	email: '',
	message: '',
	checkbox: '',
	}

	const [person, setPerson] = useState({initialValue})


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


	const handleChange = (e) => {
		const { name, value } = e.target;
		setPerson({ ...person, [name]: value })
		console.log(person);
	}
	

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
				<Form.Group className="mb-3 modInputFlex">
						<div className='modInput'>
							<Form.Label>First name</Form.Label>
						  <Form.Control className='modInput'
							  id='first_name'
							  type="text"
							  placeholder="Enter your first name"
							  name='firstName'
							  value={person.firstName}
							  onChange={handleChange}							 
							  required />
						</div>
						<div className='modInput'>
							<Form.Label>Last Name</Form.Label>					  
						  <Form.Control  className='modInput'
							  id='last_name'							 
							  type="text"
							  placeholder="Enter your last name"
							  name='lastName'
							  value={person.lastName} 
							  onChange={handleChange}	
							  required />	
						</div>				  
					</Form.Group>

					<Form.Group className="mb-3" >
						<Form.Label>Email</Form.Label>
					  <Form.Control
						  id='email'
						  type="email"
						  placeholder="yourname@email.com" 
						  name='email'
						  value={person.email}
						  onChange={handleChange}	
						  required />
				</Form.Group>

					<Form.Group className="mb-3">
					<Form.Label>Message</Form.Label>
					  <Form.Control
						  id='message'
						  as="textarea"
						  rows={3}
						  placeholder="Send me a message and I'll reply you as soon as possible..."
						  name='message'
						  value={person.message}
						  onChange={handleChange}	
						  required />
					</Form.Group>
				
					<Form.Group className="mb-3">
					  <Form.Check
						  type="checkbox"
						  label="You agree to providing your data to {name} who may contact you."
						  name='checkBok'
						  value={person.checkBox}
						  onChange={handleChange}	
						  required />
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
