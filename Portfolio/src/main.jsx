import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Outlet, BrowserRouter as Router } from 'react-router-dom';
import Layout from './Pages/layout.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
      <App />
  </Router>
);