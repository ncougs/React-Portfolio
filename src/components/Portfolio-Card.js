import { Card } from 'react-bootstrap';

const PortfolioCard = ({ img, title, description, url }) => {
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
		text: {
			textDecoration: 'none',
			color: '#ce9e62',
		},
	};
	return (
		<Card
			style={{ ...styles.background, ...styles.width, ...styles.border }}
			className='mx-auto my-4'
		>
			<a href={url} target='_blank' style={styles.text}>
				<Card.Img
					variant='top'
					src={img}
					alt={`title image of ${description}`}
				/>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
				</Card.Body>
			</a>
		</Card>
	);
};

export default PortfolioCard;
