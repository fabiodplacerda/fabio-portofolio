import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const MyProfile = () => {
  return (
    <section id="profile">
      <div className="img-container">
        <img src="profile-pic.png" alt="Fabio Lacerda profile picture" />
      </div>
      <div className="profile-text">
        <p className="p1">Hello Word!</p>
        <h2>I'm Fabio Lacerda</h2>
        <p className="p2">Junior Software Developer</p>
        <div className="btn-container">
          <button
            className="btn-resume"
            onClick={() => {
              window.open('FabioCV.pdf', '_blank');
            }}
          >
            My resume
          </button>
          <button
            className="btn-contact"
            onClick={() => {
              location.href = './#contact';
            }}
          >
            Contact Info
          </button>
        </div>
        <div className="socials-container">
          <a href="https://www.linkedin.com/in/fabiolacerda96/" target="_blank">
            <LinkedInIcon sx={{ fontSize: 45 }} />
          </a>
          <a href="https://github.com/fabiodplacerda" target="_blank">
            <GitHubIcon sx={{ fontSize: 45 }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
