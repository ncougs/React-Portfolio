import { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

import emailjs from 'emailjs-com';

const Contact = () => {
	const [messageSent, renderMessageSent] = useState(false);
	const [errorMessage, renderErrorMessage] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const updateFormState = (state, e) => {
		state(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const templateParams = {
			name,
			email,
			message,
		};

		const sendEmail = await emailjs.send(
			'portfolio',
			'template_kx2105y',
			templateParams,
			process.env.REACT_APP_email_UserID
		);

		sendEmail.status === 200
			? renderMessageSent(true)
			: renderErrorMessage(true);

		setName('');
		setEmail('');
		setMessage('');
	};

	const styles = {
		border: {
			borderColor: '#e8f2f1',
		},
		buttonColour: {
			background: '#5e7e7c',
		},
		heading: {
			fontSize: '5rem',
		},
	};

	return (
		<>
			<Container>
				<h2 style={styles.heading}>Contact Me</h2>
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
					<Button
						type='submit'
						variant='success'
						style={{ ...styles.buttonColour, ...styles.border }}
					>
						Send Message
					</Button>
				</Form>
				{messageSent && (
					<Alert
						className='my-3 text-white'
						style={{ ...styles.buttonColour, ...styles.border }}
					>
						Message Sent!
					</Alert>
				)}
				{errorMessage && (
					<Alert
						className='my-3 text-white'
						style={{ ...styles.buttonColour, ...styles.border }}
					>
						Error sending email!
					</Alert>
				)}
			</Container>
		</>
	);
};

export default Contact;
