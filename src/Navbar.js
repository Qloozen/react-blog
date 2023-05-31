import { Link } from 'react-router-dom';

// command "sfc" (stateless functional component) from simple react snippet
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blog</h1>
            <div className="links">
                <Link to="/">Home tetst</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
