import React, { useEffect } from "react";
import { AuthenticationButton } from "../../components/AuthenticationButton";
import * as S from "./styledcomponents/loginStyled.styled";
import Logo from "../../components/Logo";
import { useGazeProvider } from "../../providers/gazeCloud";
const logo = Logo();

const Login: React.FC = () => {
  const [
    triggerCalibration,
    startTracking,
    stopTracking,
    { data, error, isProcessing },
  ] = useGazeProvider();

  useEffect(() => {
    startTracking();
  }, []);

  return (
    <S.wrapper>
      <S.LogoWrapper>{logo}</S.LogoWrapper>
      <AuthenticationButton />
    </S.wrapper>
  );
};

export default Login;
