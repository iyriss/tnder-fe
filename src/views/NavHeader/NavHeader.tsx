import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo';
import * as S from './NavHeader.styled';
import { LogoWrapper } from '../Login/styledcomponents/loginStyled.styled';
import ProfileIcon from '../../components/icons/ProfileIcon';

const logo = Logo();

const navLinkStyle = {
  marginRight: '40px',
  color: '#fff',
  fontSize: '24px',
  fontFamily: 'Roboto Slab',
  fontWeight: '600',
};

const NavHeader = () => {
  return (
    <S.NavContainer>
      <LogoWrapper>{logo}</LogoWrapper>
      <S.NavContainer>
        <NavLink to='/' style={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to='/contracts' style={navLinkStyle}>
          Contracts
        </NavLink>
        <NavLink to='/admin' style={navLinkStyle}>
          Admin
        </NavLink>
        {/* <NavLink to="/profile" style={{ cursor: "pointer" }}> */}
        <ProfileIcon />
        {/* </NavLink> */}
      </S.NavContainer>
    </S.NavContainer>
  );
};

export default NavHeader;
