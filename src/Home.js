import { useState } from "react";

const Home = () => { 
    // useState hook for making values reactive
    // useState returns an array with the statefull value + a function to update it
    // "const [name, setName] =" is called array destructuring (https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/)
    const [name, setName] = useState("Jan");
    const [age, setAge] = useState(21);

    const handleClick = () => {
        setName("Peter");
        setAge(30);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;