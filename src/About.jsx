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
              Hey there! I'm a determined and enthusiastic programmer ready to
              dive into the world of Software Development. I'm all about
              delivering results and have set my sights on becoming a Software
              Engineer because the tech industry just blows my mind with its
              endless possibilities. Recently, I wrapped up a Full-stack Web
              Development Bootcamp, where I got the hang of Javascript,
              Test-driven development, PSQL, and React. Really excited about
              what's ahead!
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
