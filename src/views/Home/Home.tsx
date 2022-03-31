import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Home: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <div>Not logged in</div>;
  }

  return isAuthenticated && <div>Home</div>;
};

export default Home;
