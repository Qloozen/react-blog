import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Import of a component-function
import { BrowserRouter} from 'react-router-dom';

// Displaying the components to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

