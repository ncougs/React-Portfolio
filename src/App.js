import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WebFont from 'webfontloader';

import NavBar from './components/Navbar';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
	const [section, renderSection] = useState('About Me');

	const styles = {
		background: {
			background: '#2c2c2c',
		},
		color: {
			color: '#ce9e62',
		},
		font: {
			fontFamily: 'Space Mono',
		},
	};

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['sans-serif', 'Space Mono'],
			},
		});
	}, []);

	return (
		<>
			<div
				style={{ ...styles.background, ...styles.font }}
				class='d-flex flex-column min-vh-100'
			>
				<NavBar selectSection={renderSection} />
				<Container
					className='flex-grow-1 d-flex flex-column'
					style={{ ...styles.background, ...styles.color }}
				>
					<Row className='my-auto'>
						<Col>
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
