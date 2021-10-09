import AboutMe from './About-me';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Navigation = ({ section }) => {
	return (
		<>
			{section.includes('About Me') && <AboutMe />}
			{section.includes('Portfolio') && <Portfolio />}
			{section.includes('Contact') && <Contact />}
			{section.includes('Resume') && <Resume />}
		</>
	);
};

export default Navigation;
