import AboutMe from './About-me';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

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

	if (section === 'Resume') {
		return <Resume />;
	}
};

export default Navigation;
