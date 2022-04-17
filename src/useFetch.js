import {useState, useEffect} from 'react';

// Custom hook
const useFetch = (url) => {
    // useState hook for making values reactive
    // useState returns an array with the statefull value + a function to update it
    // "const [name, setName] =" is called array destructuring (https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/)
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // "useEffect" hook will run everytime after every completed render
    // Adding an empty dependency array to useEffect() will only run at the first time
    // Adding a value to the array it will run only if that value changes
    useEffect(() => {
        //Setting up a fake json server with endpoints: npx json-server --watch data/db.json --port 8000 
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw new Error("Could not fetch the data for that resource")
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(e => {
                setError(e.message)
                setIsPending(false);
            })
        }, 1000)
    }, [url])

    return {data, isPending, error}
}

export default useFetch;