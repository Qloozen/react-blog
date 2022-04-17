import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => { 
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    return ( 
        // "blogs={}" is a prop (arbitrary inputs)
        <div className="home">
            {<div>{error}</div>}
            {isPending && <div>Is Loading</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
     );
}
 
export default Home;