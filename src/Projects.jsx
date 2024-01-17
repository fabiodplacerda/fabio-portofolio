import resourceRivalsImg from './assets/resource-rivals.png';
import pokemonCatcherImg from './assets/pokemon-catcher.png';
import ncNews from './assets/nc-news.png';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Projects = () => {
  return (
    <section id="projects">
      <p className="p1">Browse my recent</p>
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="about-inner-containers">
          <div className="details-inner-container">
            <img
              src={resourceRivalsImg}
              alt="resource rivals a trading card game"
              className="project-img"
            />
            <h3 className="experience-sub-title project-title">
              Resource Rivals
            </h3>
            <div className="btn-container">
              <button
                className="btn-resume project-btn"
                onClick={() => {
                  window.open(
                    'https://github.com/Isaac-Sturtridge/trading-card-game-frontend',
                    '_blank'
                  );
                }}
              >
                GitHub
              </button>
              <button
                className="btn-resume project-btn"
                onClick={() => {
                  window.open('https://resource-rivals.netlify.app/', '_blank');
                }}
              >
                Hosted Version
              </button>
            </div>
          </div>

          <div className="details-inner-container">
            <img
              src={ncNews}
              alt="resource rivals a trading card game"
              className="project-img"
            />
            <h3 className="experience-sub-title project-title">Nc news</h3>
            <div className="btn-container">
              <button
                className="btn-resume project-btn"
                onClick={() => {
                  window.open(
                    'https://github.com/fabiodplacerda/fe-nc-news',
                    '_blank'
                  );
                }}
              >
                GitHub
              </button>
              <button
                className="btn-resume project-btn"
                onClick={() => {
                  window.open('https://fabio-nc-news.netlify.app/', '_blank');
                }}
              >
                Hosted Version
              </button>
            </div>
          </div>

          <div className="details-inner-container">
            <img
              src={pokemonCatcherImg}
              alt="resource rivals a trading card game"
              className="project-img"
            />

            <h3 className="experience-sub-title project-title">
              Pokemon Catcher
            </h3>

            <div className="btn-container">
              <button
                className="btn-resume project-btn"
                onClick={() => {
                  window.open(
                    'https://github.com/fabiodplacerda/pokemon-catcher',
                    '_blank'
                  );
                }}
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
      <a href="#contact">
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} className="arrow" />
      </a>
    </section>
  );
};

export default Projects;

{
}
