import { useEffect, useState } from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  const [display, setDisplay] = useState(
    window.innerWidth <= 1200 ? 'mobile' : 'desktop'
  );

  useEffect(() => {
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

  return (
    <>
      {display === 'desktop' && <DesktopHeader />}
      {display === 'mobile' && <MobileHeader />}
    </>
  );
};

export default Header;
