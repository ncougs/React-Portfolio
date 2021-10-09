import { useState } from 'react';
import { Container } from 'react-bootstrap';

import NavBar from './components/Navbar';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
	const [section, renderSection] = useState('About Me');
	return (
		<>
			<NavBar selectSection={renderSection} />
			<Container>
				<Navigation section={section} />
			</Container>
			<Footer />
		</>
	);
};

export default App;
