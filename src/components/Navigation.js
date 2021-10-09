import AboutMe from './About-me';

const Navigation = ({ section }) => {
	return section === 'About Me' && <AboutMe />;
};

export default Navigation;
