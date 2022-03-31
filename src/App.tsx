import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Profile } from "./views/Profile/Profile";
import { Login } from "./views/Login";
import { useAuth0 } from "@auth0/auth0-react";

export const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
