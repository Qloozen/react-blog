import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

// This is a component-function that returns JSX code
function App() { 
  return ( 
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
