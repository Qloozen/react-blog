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
        // When switching to different components before the fetch completed the state change, it will log an error.
        // AbortController is used to prevent this
        const abortController = new AbortController();

        //Setting up a fake json server with endpoints: npx json-server --watch data/db.json --port 8000 
        setTimeout(() => {
            fetch(url, { signal: abortController.signal})
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
                if (e.name === "AbortError") {
                    console.log("fetch aborted")
                } else {
                    setError(e.message)
                    setIsPending(false);
                }
            })
        }, 1000);

        return () => abortController.abort();

    }, [url]);

    return {data, isPending, error}
}

export default useFetch;