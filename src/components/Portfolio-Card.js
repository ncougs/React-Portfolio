import { Card, Button } from 'react-bootstrap';

const PortfolioCard = ({ img, title, description }) => {
	return (
		<Card style={{ width: '18rem' }} className='mx-auto my-4'>
			<Card.Img variant='top' src={img} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Button variant='primary'>Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

export default PortfolioCard;
