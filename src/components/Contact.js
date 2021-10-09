import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
	const [messageSent, renderMessageSent] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const updateFormState = (state, e) => {
		state(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		renderMessageSent(true);
		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<>
			<h2>Contact Me</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3' controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						required
						value={name}
						type='text'
						placeholder='Harry Potter'
						onChange={(e) => {
							updateFormState(setName, e);
						}}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='email'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						required
						value={email}
						type='email'
						placeholder='email@email.com'
						onChange={(e) => {
							updateFormState(setEmail, e);
						}}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='message'>
					<Form.Label>Message</Form.Label>
					<Form.Control
						required
						value={message}
						as='textarea'
						rows={3}
						onChange={(e) => {
							updateFormState(setMessage, e);
						}}
					/>
				</Form.Group>
				<Button type='submit' variant='success'>
					Send Message
				</Button>
			</Form>
			{messageSent && (
				<Alert variant='success' className='my-3'>
					Message Sent!
				</Alert>
			)}
		</>
	);
};

export default Contact;
