const AboutMe = () => {
	const styles = {
		heading: {
			fontSize: '6rem',
		},
	};
	return (
		<>
			<img src='Avatar.png' thumbnail className='border-none' />
			<h2 style={styles.heading}>About Me</h2>
			<p>
				Hello everyone, welcome to my react portfolio! <br />
				Full Stack Web Developer in training. Currently completing Monash
				Unversities Coding Boot Camp.
			</p>
		</>
	);
};

export default AboutMe;
