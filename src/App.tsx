import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home/Home';
import { TrapProfile } from './views/TrapProfile/TrapProfile';
import { Login } from './views/Login';
import { Contracts } from './views/Contracts';
import { Admin } from './views/Admin/Admin';
import { useAuth0 } from '@auth0/auth0-react';
import { NavHeader } from './views/NavHeader';

export const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path='/*' element={<Login />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <NavHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contracts' element={<Contracts />} />
        <Route path='/admin' element={<TrapProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
