import AboutMe from './About-me';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Navigation = ({ section }) => {
	if (section === 'About Me') {
		return <AboutMe />;
	}

	if (section === 'Portfolio') {
		return <Portfolio />;
	}

	if (section === 'Contact') {
		return <Contact />;
	}
};

export default Navigation;
