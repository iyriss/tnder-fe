import React from "react";
import { AuthenticationButton } from "../../components/AuthenticationButton";
import * as S from "./styledcomponents/loginStyled.styled";
import Logo from "../../components/Logo";
const logo = Logo();

const Login: React.FC = () => {
  return (
    <S.wrapper>
      <S.LogoWrapper>{logo}</S.LogoWrapper>
      <AuthenticationButton />
    </S.wrapper>
  );
};

export default Login;
