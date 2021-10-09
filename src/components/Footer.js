import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
	const iconStyle = {
		fontSize: '1.5rem',
	};

	return (
		<Navbar fixed='bottom' bg='light' variant='light'>
			<Container>
				<Nav className='m-auto'>
					<Nav.Link href='https://github.com/' target='_blank'>
						<i class='bi-github' style={iconStyle}></i>
					</Nav.Link>
					<Nav.Link href='https://www.linkedin.com/' target='_blank'>
						<i class='bi bi-linkedin' style={iconStyle}></i>
					</Nav.Link>
					<Nav.Link href='https://www.twitter.com/' target='_blank'>
						<i class='bi bi-twitter' style={iconStyle}></i>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Footer;
