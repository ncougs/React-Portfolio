import { Row, Col } from 'react-bootstrap';

import PortfolioCard from './Portfolio-Card';

const Portfolio = () => {
	const portfolioWork = [
		{
			title: 'Project 1',
			img: 'rolling-waves.jpg',
			description: 'This if my first project',
		},
		{
			title: 'Project 2',
			img: 'rolling-waves.jpg',
			description: 'This if my second project',
		},
		{
			title: 'Project 3',
			img: 'rolling-waves.jpg',
			description: 'This if my third project',
		},
		{
			title: 'Project 4',
			img: 'rolling-waves.jpg',
			description: 'This if my fourth project',
		},
		{
			title: 'Project 5',
			img: 'rolling-waves.jpg',
			description: 'This if my fifth project',
		},
		{
			title: 'Project 6',
			img: 'rolling-waves.jpg',
			description: 'This if my sixth project',
		},
	];

	return (
		<>
			<h2>PortFolio</h2>
			<Row>
				{portfolioWork.map((item) => (
					<Col lg={4}>
						<PortfolioCard
							title={item.title}
							img={item.img}
							description={item.description}
						></PortfolioCard>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Portfolio;
