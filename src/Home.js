import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => { 
    // useState hook for making values reactive
    // useState returns an array with the statefull value + a function to update it
    // "const [name, setName] =" is called array destructuring (https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/)
    const [blogs, setBlogs] = useState(null);

    // "useEffect" hook will run everytime after every completed render
    // Adding an empty dependency array to useEffect() will only run at the first time
    // Adding a value to the array it will run only if that value changes
    useEffect(() => {
        //Setting up a fake json server with endpoints: npx json-server --watch data/db.json --port 8000 
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            })
    }, [])

    return ( 
        // "blogs={}" is a prop (arbitrary inputs)
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
     );
}
 
export default Home;