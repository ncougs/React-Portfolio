import { Container } from 'react-bootstrap';

const Resume = () => {
	const styles = {
		heading: {
			fontSize: '7rem',
		},
	};
	return (
		<>
			<Container>
				<h2 style={styles.heading}>Resume</h2>
				<p>Thank you for downloading!</p>
			</Container>
		</>
	);
};

export default Resume;
