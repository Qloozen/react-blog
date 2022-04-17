import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Import of a component-function
import { BrowserRouter} from 'react-router-dom';

// Displaying the components to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Issues with the react router v5 could've been caused by the strictmode (issue: url gets updated but not rendering the components)
// I fixed it with the new react router v6 
// Found source: https://github.com/facebook/react/issues/21674
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

