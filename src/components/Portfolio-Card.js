import { Card, Button } from 'react-bootstrap';

const PortfolioCard = ({ img, title, description }) => {
	const styles = {
		background: {
			background: '#2c2c2c',
		},
		width: {
			width: '18rem',
		},
		border: {
			borderColor: '#ce9e62',
		},
		buttonColour: {
			background: '#ce9e62',
		},
	};
	return (
		<Card
			style={{ ...styles.background, ...styles.width, ...styles.border }}
			className='mx-auto my-4'
		>
			<Card.Img variant='top' src={img} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Button style={{ ...styles.buttonColour, ...styles.border }}>
					Go somewhere
				</Button>
			</Card.Body>
		</Card>
	);
};

export default PortfolioCard;
