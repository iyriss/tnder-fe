import React, { useEffect } from "react";
import { useGazeProvider } from "../../providers/gazeCloud";
import * as S from "../styles/dataButtons.styled";
import formatData from "../../utils/FormatData";

const Calibration: React.FC = () => {
  const [
    triggerCalibration,
    startTracking,
    stopTracking,
    { data, error, isProcessing },
  ] = useGazeProvider();

  useEffect(() => {
    if (data && data.length > 1) {
      console.log(formatData(data));
    }
    // Api route to dave data
    // Has current user, will need viewed user id passed in
  }, [data]);

  return <S.Button onClick={triggerCalibration}>Calibrate</S.Button>;
};
export default Calibration;
