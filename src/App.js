import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import NavBar from './components/Navbar';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
	const [section, renderSection] = useState('About Me');

	const styles = {
		background: {
			background: '#5e7e7c',
		},
		color: {
			color: '#fff',
		},
		font: {
			fontFamily: `'Oswald', sans-serif`,
			lineHeight: '2rem',
		},
	};

	return (
		<>
			<div
				style={{ ...styles.background, ...styles.font }}
				className='d-flex flex-column min-vh-100'
			>
				<NavBar selectSection={renderSection} />
				<Container
					fluid
					className='flex-grow-1 d-flex flex-column m-0 p-0'
					style={{ ...styles.background, ...styles.color }}
				>
					<Row className='my-auto m-0 p-0'>
						<Col className='p-0'>
							<Navigation section={section} />
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		</>
	);
};

export default App;
