//Styled Components
import { SNavbar, SNavLogo, SHelp, SUser } from './Navbar.styles';
//React Components
import Icon from '../Icon/Icon';
//Images
import logo from '../../assets/logo/logo_darkbg_horizontal.png';
import helpIcon from '../../assets/icon/ic_help.svg';
import helpIcon_h from '../../assets/icon/ic_help_h.svg';
import userIcon from '../../assets/icon/ic_user.svg';
import userIcon_h from '../../assets/icon/ic_user_h.svg';

import ProgressBar from '../ProgressBar/ProgressBar';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { pathname } = useLocation();
  const [showProgress, setShowProgress] = useState(false);

  //如果在首頁，則隱藏Progress bar
  useEffect(() => {
    if (pathname !== '/') {
      setShowProgress(true);
    }
  }, [pathname]);

  return (
    <SNavbar>
      <SNavLogo>
        <img src={logo} alt="dotted sign logo" />
      </SNavLogo>
      {showProgress ? <ProgressBar /> : null}
      <SHelp>
        <Icon src={helpIcon} alt="help icon" srcOnHover={helpIcon_h} />
      </SHelp>
      <SUser>
        <Icon src={userIcon} alt="user icon" srcOnHover={userIcon_h} />
      </SUser>
    </SNavbar>
  );
};

export default Navbar;
