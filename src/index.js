import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Context } from './components/Context/Context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
    domain="dev-ptkhrfmfcrhufh63.us.auth0.com"
    clientId="J4MDZw0P6vyMSICW4ExIBCv0rflm3qtB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Context>
      <App />
    </Context>

  </Auth0Provider>,




);
