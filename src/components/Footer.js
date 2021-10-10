import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
	const styles = {
		background: {
			background: '#2c2c2c',
		},
		color: {
			color: '#ce9e62',
		},
		iconStyle: {
			fontSize: '1.5rem',
		},
	};

	return (
		<Navbar sticky='bottom' variant='light' style={styles.background}>
			<Container>
				<Nav className='m-auto'>
					<Nav.Link href='https://github.com/' target='_blank'>
						<i
							class='bi-github'
							style={{ ...styles.iconStyle, ...styles.color }}
						></i>
					</Nav.Link>
					<Nav.Link href='https://www.linkedin.com/' target='_blank'>
						<i
							class='bi bi-linkedin'
							style={{ ...styles.iconStyle, ...styles.color }}
						></i>
					</Nav.Link>
					<Nav.Link href='https://www.twitter.com/' target='_blank'>
						<i
							class='bi bi-twitter'
							style={{ ...styles.iconStyle, ...styles.color }}
						></i>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Footer;
