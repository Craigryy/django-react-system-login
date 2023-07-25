import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie'; // Corrected import

import Login from './components/login';

function Router() {
  return (
    <CookiesProvider> {/* Use correct capitalization for CookiesProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/articles" element={<App />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();
