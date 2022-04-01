import React from "react";
import { useGazeProvider } from "../../providers/gazeCloud";
import * as S from "./styles/calibration.styled";

const Calibration: React.FC = () => {
  const [
    triggerCalibration,
    startTracking,
    stopTracking,
    { data, error, isProcessing },
  ] = useGazeProvider();

  return (
    <S.TrackingButton onClick={triggerCalibration}>Calibrate</S.TrackingButton>
  );
};
export default Calibration;
