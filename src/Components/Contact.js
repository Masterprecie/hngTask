
import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


const Contact = () => {

	const navigate = useNavigate()

	const initialValue={
	firstName: '',
	lastName: '',
	email: '',
	message: '',
	checkBox:false,
	}

	const [person, setPerson] = useState({ initialValue });
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	
	const handleSubmit = (e) => {
		e.preventDefault()
		setFormErrors(validate(person));
		setIsSubmit(true);
		if (Object.keys(formErrors).length === 0 && isSubmit)
			navigate('/success')
	}

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
		console.log(person);
		}
	}, [formErrors]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPerson({ ...person, [name]: value })
		console.log(person)
	}
	
	const validate = (values) => {
		const errors = {};
		if (!values.firstName) {
			errors.firstName = 'First Name is required!';
		}
		if (!values.lastName) {
			errors.lastName = 'Last Name is required!';
		}
		if (!values.email) {
			errors.email = 'Email is required!';
		} 
		if (!values.message) {
			errors.message = 'Message cannot be blank!';
		}
		
		return errors;
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
			  <Form onSubmit={handleSubmit} className='pb-4'>
					<Row className="mb-3 form" >
						<Form.Group as={Col} >
							<Form.Label>First name</Form.Label>
							<Form.Control id='first_name'
								type="text"
								placeholder="Enter your first name"
								name='firstName'
								value={person.firstName}
							  onChange={handleChange} />
						  <p className='error' >{ formErrors.firstName}</p>
						</Form.Group>
							
						<Form.Group as={Col} >
							<Form.Label>Last Name</Form.Label>
							<Form.Control id='last_name'							 
								type="text"
								placeholder="Enter your last name"
								name='lastName'
								value={person.lastName} 
							  onChange={handleChange} />
						  <p className='error' >{ formErrors.lastName}</p>
					  </Form.Group>				   
				  </Row>					 
								
					<Form.Group className="mb-3" >
						<Form.Label>Email</Form.Label>
					  <Form.Control
						  id='email'
						  type="email"
						  placeholder="yourname@email.com" 
						  name='email'
						  value={person.email}
						  onChange={handleChange}	
						  />
				  </Form.Group>
				  <p className='error' >{ formErrors.email}</p>

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
						   />
				  </Form.Group>
				  <p className='error' >{ formErrors.message}</p>
				
					<Form.Group className="mb-3">
					  <Form.Check
						  type="checkbox"
						  label="You agree to providing your data to {name} who may contact you."
						  name='checkBox'
						  value={person.checkBox}
						  onChange={handleChange}	
						  isRequired/>
				  </Form.Group>
				  <p className='error' >{formErrors.checkBox}</p>
				
				  <Button id='btn__submit' variant="primary" type="submit" className='w-100' >
				Send message
				</Button>
			</Form>		
		  </article>
			<Footer/>
		  
	 </>
  )
}

export default Contact
