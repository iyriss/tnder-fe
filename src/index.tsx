import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { GazeCloudProvider } from './providers/gazeCloud';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-y3jjd8l2.us.auth0.com'
      clientId='2i8KFZYhYov1Ih4rUcisknpeq4UdMp7a'
      redirectUri={window.location.origin}
    >
      <GazeCloudProvider>
        <App />
      </GazeCloudProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
