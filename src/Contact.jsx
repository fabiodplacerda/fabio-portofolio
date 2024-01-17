import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <section id="contact">
      <p className="p1">Get in touch</p>
      <h2>Contact Me</h2>
      <div className="contact-main-container">
        <div className="contact-info-container">
          <EmailIcon sx={{ fontSize: 35 }} />
          <p>
            <a href="mailto:fabiolacerdadev@gmail.com">
              fabiolacerdadev@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <LinkedInIcon sx={{ fontSize: 40 }} />
          <p>
            <a
              href="https://www.linkedin.com/in/fabiolacerda96/"
              target="_blank"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
