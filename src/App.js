import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { Routes, Route } from 'react-router-dom';
import BlogDetails from './BlogDetails';

// This is a component-function that returns JSX code
function App() { 
  return ( 
    <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="create" element={<Create />} />
            <Route path="blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
