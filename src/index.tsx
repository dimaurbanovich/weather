import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './provider/ThemeProvider';

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
