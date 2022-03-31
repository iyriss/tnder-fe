import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Home: React.FC = () => {
  const { user } = useAuth0();

  useEffect(() => {
    console.log("user: ", user);
  }, [user]);

  return <div>Home</div>;
};

export default Home;
