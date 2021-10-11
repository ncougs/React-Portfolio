import { Row, Col } from 'react-bootstrap';

import PortfolioCard from './Portfolio-Card';

const Portfolio = () => {
	const portfolioWork = [
		{
			title: 'Meme Creation',
			img: 'https://user-images.githubusercontent.com/84214872/132187681-bf57826a-7b3a-4956-8c91-71a23cfe2d89.png',
			description: 'Social Platform to create and share Memes.',
			url: 'https://project2-memecreation.herokuapp.com/',
		},
		{
			title: 'Tech Blog',
			img: 'https://user-images.githubusercontent.com/84214872/131430156-7dbf9d59-cff6-41e8-bab1-0675d560e25b.png',
			description: 'Social Platform create and share blog posts.',
			url: 'https://tech-blog-cms.herokuapp.com/',
		},
		{
			title: 'Employee Tracker',
			img: 'https://user-images.githubusercontent.com/84214872/129541860-3dee1d6a-88f6-489e-b06d-3b77fa172fa8.gif',
			description:
				'Node.js application to manage employees within your business.',
			url: 'https://github.com/ncougs/Employee-Tracker',
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
			<h2 style={styles.heading}>PortFolio</h2>
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
		</>
	);
};

export default Portfolio;
