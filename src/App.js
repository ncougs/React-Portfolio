import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import NavBar from './components/Navbar';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
	const [section, renderSection] = useState('About Me');
	return (
		<>
			<NavBar selectSection={renderSection} />
			<Container className='flex-grow-1 d-flex flex-column'>
				<Row className='my-auto'>
					<Col>
						<Navigation section={section} />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
};

export default App;
