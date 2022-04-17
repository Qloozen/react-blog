import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

// This is a component-function that returns JSX code
function App() { 
  return ( 
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
