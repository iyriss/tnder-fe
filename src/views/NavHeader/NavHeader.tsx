import React from 'react';
import * as S from './NavHeader.styled';

const NavHeader = () => {
  return (
    <S.NavContainer>
      <img src={require('../../assets/logo.png')} alt='logo' />
    </S.NavContainer>
  );
};

export default NavHeader;
