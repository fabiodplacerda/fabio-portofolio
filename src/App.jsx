import Header from './Header';
import MyProfile from './MyProfile';
import About from './About';
import Experience from './Experience';
import Projects from './projects';
import Contact from './Contact';
import Footer from './Footer';
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const App = () => {
  const [init, setInit] = useState(false);
  const [display, setDisplay] = useState(
    window.innerWidth <= 1200 ? 'mobile' : 'desktop'
  );

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 1200) {
        setDisplay('mobile');
      } else {
        setDisplay('desktop');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const particlesLoaded = container => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: '#f8f8f8'
        }
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push'
          },
          onHover: {
            enable: false,
            mode: 'repulse'
          }
        },
        modes: {
          push: {
            quantity: 4
          },
          repulse: {
            distance: 180,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#000'
        },
        links: {
          color: '#000',
          distance: 250,
          enable: true,
          opacity: 0.2,
          width: 1
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce'
          },
          random: false,
          speed: 0.5,
          straight: true
        },
        number: {
          density: {
            enable: true
          },
          value: 120
        },
        opacity: {
          value: 0.2
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      detectRetina: true
    }),
    []
  );

  if (init && display === 'desktop') {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <Header display={display} />
        <MyProfile />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header display={display} />
      <MyProfile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
