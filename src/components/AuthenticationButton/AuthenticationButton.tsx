import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import * as S from "./styles/authentication.styled";

const AuthenticationButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <S.LoginButton onClick={() => loginWithRedirect()}>Log In</S.LoginButton>
  );
};

export default AuthenticationButton;
