import { useState } from 'react';
import { Container } from 'react-bootstrap';

import NavBar from './components/Navbar';
import Navigation from './components/Navigation';

const App = () => {
	const [section, renderSection] = useState('About Me');

	return (
		<>
			<NavBar renderSection={renderSection} />
			<Container>
				<Navigation section={section} />
			</Container>
		</>
	);
};

export default App;
