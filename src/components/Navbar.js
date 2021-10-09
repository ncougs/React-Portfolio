import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = ({ selectSection }) => {
	return (
		<Navbar bg='light' variant='light'>
			<Container>
				<Navbar.Brand href='#home'>React Portfolio</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link
						onClick={() => {
							selectSection('About Me');
						}}
					>
						About Me
					</Nav.Link>
					<Nav.Link
						onClick={() => {
							selectSection('Portfolio');
						}}
					>
						Portfolio
					</Nav.Link>
					<Nav.Link
						onClick={() => {
							selectSection('Contact');
						}}
					>
						Contact
					</Nav.Link>
					<Nav.Link href='#pricing'>Resume</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
