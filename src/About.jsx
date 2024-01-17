import SchoolIcon from '@mui/icons-material/School';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import WorkIcon from '@mui/icons-material/Work';
import aboutPic from './assets/about-pic.png';

const About = () => {
  return (
    <section id="about">
      <p className="p1">Get to know me</p>
      <h2>About me</h2>
      <div className="about-main-container">
        <img src={aboutPic} alt="profile picture" className="about-pic" />
        <div className="details-main-container">
          <div className="about-inner-containers">
            <div className="details-inner-container">
              <WorkIcon sx={{ fontSize: 40 }} />
              <h3>Experience</h3>
              <p>
                Northcoders - Software Engineer Bootcamp
                <br />
              </p>
            </div>
            <div className="details-inner-container">
              <SchoolIcon sx={{ fontSize: 40 }} />
              <h3>Education</h3>
              <p>Management & Administration</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a Highly Resilient, enthusiastic, and logically driven
              programmer looking to kick-start my career in Software
              Development. I am a results-driven professional and decided to
              pursue a role as a Software engineer because I'm fascinated by the
              tech industry and what I could potentially do. Recently embarked
              on a Full-stack Web Development Bootcamp gaining proficiency in
              Javascript, Test-driven development, PSQL, and React
            </p>
          </div>
        </div>
      </div>
      <a href="#experience">
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} className="arrow" />
      </a>
    </section>
  );
};

export default About;
