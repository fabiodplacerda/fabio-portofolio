import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = ({ display }) => {
  return (
    <>
      {display === 'desktop' && <DesktopHeader />}
      {display === 'mobile' && <MobileHeader />}
    </>
  );
};

export default Header;
