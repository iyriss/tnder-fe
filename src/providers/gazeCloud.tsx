import React, { useContext, useState } from "react";
import { DataType } from "../utils/FormatData";

type GazeResult = [
  () => void,
  () => void,
  () => void,
  {
    data: Array<DataType> | null;
    isProcessing: boolean;
    error: string | null;
  }
];

const GazeContext = React.createContext<GazeResult | undefined>(undefined);

export const GazeCloudProvider: React.FC = ({ children }): any => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Array<DataType> | null>([]);

  const gazeData: any = [];
  const triggerCalibration = () => {
    setIsProcessing(true);
    setError(null);

    // @ts-ignore
    (GazeCloudAPI as any).StartEyeTracking();

    // @ts-ignore
    GazeCloudAPI.OnCalibrationComplete = function () {
      setIsProcessing(false);
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
      gazeData.push(GazeData);
    };

    setTimeout(() => {
      // @ts-ignore
      (GazeCloudAPI as any).StopEyeTracking();

      const data: Array<DataType> = gazeData.map(
        ({ GazeX, GazeY }: { GazeX: number; GazeY: number }) => {
          return {
            x: GazeX,
            y: GazeY,
            r: 2,
          };
        }
      );
      setData(data);
    }, 10000);
  };

  const startTracking = () => {
    // @ts-ignore
    (GazeCloudAPI as any).StartEyeTracking();
  };

  const stopTracking = () => {
    // @ts-ignore
    (GazeCloudAPI as any).StopEyeTracking();

    const data: Array<DataType> = gazeData.map((gaze: any) => {
      return {
        x: gaze.x,
        y: gaze.y,
        r: gaze.r,
      };
    });
    setData(data);
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
