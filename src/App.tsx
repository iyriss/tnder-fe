import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Profile } from "./views/Profile/Profile";
import { Login } from "./views/Login";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
