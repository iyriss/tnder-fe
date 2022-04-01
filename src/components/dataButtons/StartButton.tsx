import React from "react";
import { useGazeProvider } from "../../providers/gazeCloud";
import * as S from "../styles/dataButtons.styled";

const StartButton: React.FC = () => {
  const [
    triggerCalibration,
    startTracking,
    stopTracking,
    { data, error, isProcessing },
  ] = useGazeProvider();

  return <S.Button onClick={startTracking}>Calibrate</S.Button>;
};

export default StartButton;
