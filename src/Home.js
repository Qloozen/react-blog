import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => { 
    // useState hook for making values reactive
    // useState returns an array with the statefull value + a function to update it
    // "const [name, setName] =" is called array destructuring (https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/)
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState("Jan");

    // "useEffect" hook will run everytime after every completed render
    // Adding an empty dependency array to useEffect() will only run at the first time
    // Adding a value to the array it will run only if that value changes
    useEffect(() => {
        console.log("use effect ran")
    }, [name])

    return ( 
        // "blogs={}" is a prop (arbitrary inputs)
        <div className="home">
            <BlogList blogs={blogs} title="All blogs"/>
            <BlogList blogs={blogs.filter(blog => blog.author === "mario")} title="Mario" handleDelete={handleDelete}/>
            <button onClick={() => {setName("Henk")}}>Change name</button>
        </div>
     );
}
 
export default Home;