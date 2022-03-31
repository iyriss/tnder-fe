import React from "react";
import { useGazeProvider } from "../../providers/gazeCloud";
import * as S from "./styles/calibration.styled";

const Callibration: React.FC = () => {
  const [
    triggerCalibration,
    startTracking,
    stopTracking,
    { data, error, isProcessing },
  ] = useGazeProvider();

  function handleClick() {}

  return (
    <S.TrackingButton onClick={triggerCalibration}>Calibrate</S.TrackingButton>
  );
};
export default Callibration;
