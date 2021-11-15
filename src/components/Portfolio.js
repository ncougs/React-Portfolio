import { Row, Col, Container } from 'react-bootstrap';

import PortfolioCard from './Portfolio-Card';

const Portfolio = () => {
	const portfolioWork = [
		{
			title: 'Tech Blog',
			img: 'https://user-images.githubusercontent.com/84214872/131430156-7dbf9d59-cff6-41e8-bab1-0675d560e25b.png',
			description: 'Social Platform - Create and share blog posts.',
			url: 'https://tech-blog-cms.herokuapp.com/',
		},
		{
			title: 'Surf Spot',
			img: 'https://user-images.githubusercontent.com/84214872/139641887-3ccb90ae-68fa-44a3-9434-19e1fe972384.png',
			description: 'Surf Community Application - Media Sharing Platform',
			url: 'https://surf-spot.herokuapp.com/',
		},
		{
			title: 'Book Search Engine',
			img: 'https://user-images.githubusercontent.com/84214872/137649589-fa6a75ab-4420-429a-94f3-9644ce5398ef.png',
			description: 'MERN Stack Book Search Application',
			url: 'https://mern-stack-book-search-engine.herokuapp.com/',
		},
	];

	const styles = {
		heading: {
			fontSize: '4rem',
			textAlign: 'center',
		},
	};

	return (
		<>
			<h2 style={styles.heading}>Portfolio</h2>
			<Container>
				<Row>
					{portfolioWork.map((item, index) => (
						<Col lg={4} key={index} className='d-flex mx-auto'>
							<PortfolioCard
								title={item.title}
								img={item.img}
								description={item.description}
								url={item.url}
							></PortfolioCard>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Portfolio;
