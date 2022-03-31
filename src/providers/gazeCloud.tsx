import React, { useContext, useState } from "react";

type GazeResult = [
  () => void,
  () => void,
  () => void,
  {
    data: any | undefined;
    isProcessing: boolean;
    error: string | null;
  }
];

const GazeContext = React.createContext<GazeResult | undefined>(undefined);

export const GazeCloudProvider: React.FC = ({ children }): any => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCalibrated, setIsCalibrated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any | undefined>();

  const triggerCalibration = () => {
    setIsProcessing(true);
    setError(null);

    // @ts-ignore
    (GazeCloudAPI as any).StartEyeTracking();

    // @ts-ignore
    GazeCloudAPI.OnCalibrationComplete = function () {
      setIsProcessing(false);
      setIsCalibrated(true);
      // @ts-ignore
      GazeCloudAPI.StopEyeTracking();
      console.log("gaze Calibration Complete");
    };
    // @ts-ignore
    GazeCloudAPI.OnCamDenied = function () {
      setError("Camera access denied");
    };
    // @ts-ignore
    GazeCloudAPI.OnError = function (msg: Error) {
      setError(`error: ${msg.message}`);
    };

    // @ts-ignore
    GazeCloudAPI.OnResult = function (GazeData) {
      console.log("gaze data: ", GazeData);
      setData(GazeData);
    };
  };

  const startTracking = () => {
    // @ts-ignore
    (GazeCloudAPI as any).StartEyeTracking();
  };

  const stopTracking = () => {
    // @ts-ignore
    (GazeCloudAPI as any).StopEyeTracking();
  };

  return (
    <GazeContext.Provider
      value={[
        triggerCalibration,
        startTracking,
        stopTracking,
        { data, isProcessing, error },
      ]}
    >
      {children}
    </GazeContext.Provider>
  );
};

export const useGazeProvider = () => {
  const context = useContext(GazeContext);

  if (context === undefined) {
    throw new Error("useThemeProvider must be used in the ThemeProvider");
  }

  return context;
};
