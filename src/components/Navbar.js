import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = ({ renderSection }) => {
	return (
		<Navbar bg='light' variant='light'>
			<Container>
				<Navbar.Brand href='#home'>React Portfolio</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link onCLick={renderSection('About Me')}>About Me</Nav.Link>
					<Nav.Link href='#features'>Portfolio</Nav.Link>
					<Nav.Link href='#pricing'>Contact</Nav.Link>
					<Nav.Link href='#pricing'>Resume</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
