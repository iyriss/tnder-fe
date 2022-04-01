import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { ProfileApi } from "../apis/ProfileApi";

type Result = [
  () => void,
  {
    loading: boolean;
    error: any;
    profiles: any[];
  }
];

export const useGetProfiles = (): Result => {
  const [profiles, setProfiles] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const { user } = useAuth0();
  const profileApi = new ProfileApi();
  const trigger = () => {
    const getData = async () => {
      const profiles = await profileApi.getProfiles(user?.email);
      setProfiles(profiles.data);
    };
    getData();
  };

  return [trigger, { profiles, loading, error }];
};
