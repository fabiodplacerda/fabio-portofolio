import VerifiedIcon from '@mui/icons-material/Verified';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Experience = () => {
  return (
    <section id="experience">
      <p className="p1">Explore my</p>
      <h2>Experience</h2>
      <div className="experience-details-container">
        <div className="about-main-container">
          <div className="details-inner-container">
            <h3 className="experience-sub-title">Frontend Development</h3>
            <div className="article-container">
              <article>
                <VerifiedIcon />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <VerifiedIcon />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <VerifiedIcon />
                <div>
                  <h3>React</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <VerifiedIcon />
                <div>
                  <h3>Javascript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <VerifiedIcon />
                <div>
                  <h3>Typescript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <VerifiedIcon />
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-inner-container">
            <h3 className="experience-sub-title">Backend Development</h3>
            <div className="article-container">
              <article>
                <VerifiedIcon />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <VerifiedIcon />
                <div>
                  <h3>MongoDB</h3>
                  <p>basic</p>
                </div>
              </article>
              <article>
                <VerifiedIcon />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <VerifiedIcon />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <VerifiedIcon />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <VerifiedIcon />
                <div>
                  <h3>TDD</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <a href="#projects">
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} className="arrow" />
      </a>
    </section>
  );
};

export default Experience;
