import { Card } from 'react-bootstrap';

const PortfolioCard = ({ img, title, description, url }) => {
	const styles = {
		background: {
			background: '#5e7e7c',
		},
		width: {
			width: '18rem',
		},
		border: {
			borderColor: '#e8f2f1',
		},
		text: {
			textDecoration: 'none',
			color: '#e8f2f1',
		},
		image: {
			width: '100%',
			height: '18rem',
			objectFit: 'cover',
		},
	};
	return (
		<>
			<a
				href={url}
				target='_blank'
				style={styles.text}
				className='mx-auto my-4 d-flex'
			>
				<Card
					style={{ ...styles.background, ...styles.width, ...styles.border }}
				>
					<Card.Body>
						<Card.Title className='fw-bold'>{title}</Card.Title>
						<Card.Text>{description}</Card.Text>
					</Card.Body>
					<Card.Img
						src={img}
						alt={`title image of ${description}`}
						style={styles.image}
					/>
				</Card>
			</a>
		</>
	);
};

export default PortfolioCard;
