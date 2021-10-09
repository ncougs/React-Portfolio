import AboutMe from './About-me';
import Portfolio from './Portfolio';

const Navigation = ({ section }) => {
	if (section === 'About Me') {
		return <AboutMe />;
	}

	if (section === 'Portfolio') {
		return <Portfolio />;
	}
};

export default Navigation;
