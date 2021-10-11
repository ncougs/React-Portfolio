import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = ({ selectSection }) => {
	const styles = {
		background: {
			background: '#2c2c2c',
		},
		color: {
			color: '#ce9e62',
		},
	};

	return (
		<Navbar variant='light' expand='lg' style={styles.background}>
			<Container>
				<Navbar.Brand
					onClick={() => {
						selectSection('About Me');
					}}
					href='#top'
					style={styles.color}
				>
					Nicholas Cougan
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className='flex-grow-0'>
					<Nav className='me-auto'>
						<Nav.Link
							onClick={() => {
								selectSection('About Me');
							}}
							style={styles.color}
						>
							About Me
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								selectSection('Portfolio');
							}}
							style={styles.color}
						>
							Portfolio
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								selectSection('Contact');
							}}
							style={styles.color}
						>
							Contact
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								selectSection('Resume');
							}}
							style={styles.color}
							href='https://drive.google.com/file/d/15Nng6wCLEpyk1KAn6byQsgDYE3arAsLg/view?usp=sharing'
							target='_blank'
						>
							Resume
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
