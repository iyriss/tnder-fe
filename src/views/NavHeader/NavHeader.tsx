import React from 'react';
import Logo from '../../components/Logo';
import * as S from './NavHeader.styled';
import { LogoWrapper } from '../Login/styledcomponents/loginStyled.styled';
import ProfileIcon from '../../components/icons/ProfileIcon';

const logo = Logo();

const NavHeader = () => {
  return (
    <S.NavContainer>
      <LogoWrapper>{logo}</LogoWrapper>
      <ProfileIcon />
    </S.NavContainer>
  );
};

export default NavHeader;
