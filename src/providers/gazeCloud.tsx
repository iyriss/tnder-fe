import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useState } from "react";
import { HeatmapApi } from "../apis/HeatmapApi";
import format_data, { DataType } from "../utils/FormatData";

type GazeResult = [
  () => void,
  () => void,
  (viewer: string) => void,
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
  const { user } = useAuth0();
  const heatmapApi = new HeatmapApi();

  let gazeData: any = [];
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
  };

  const startTracking = () => {
    // @ts-ignore
    (GazeCloudAPI as any).StartEyeTracking();

    // @ts-ignore
    GazeCloudAPI.OnResult = function (GazeData) {
      gazeData.push(GazeData);
    };
  };

  const stopTracking = (viewer: string) => {
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

    const localData = format_data(data);
    const beData = {
      user: user?.email,
      viewer: viewer,
      heatmap: localData,
    };

    heatmapApi.createHeatmap(beData);

    gazeData = [];
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
