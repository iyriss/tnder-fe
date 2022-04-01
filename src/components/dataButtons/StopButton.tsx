import React from "react";
import { useGazeProvider } from "../../providers/gazeCloud";
import * as S from "../styles/dataButtons.styled";

const StopButton: React.FC = () => {
  const [
    triggerCalibration,
    startTracking,
    stopTracking,
    { data, error, isProcessing },
  ] = useGazeProvider();

  return <S.Button onClick={stopTracking}>Calibrate</S.Button>;
};

export default StopButton;
