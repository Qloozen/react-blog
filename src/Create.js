import { useState } from "react";
import { useNavigate} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Peter");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault() // prevents refreshing after a submit
        const blog = { title, body, author}

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("Blog added")
            setIsPending(false);
            navigate("/");
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text" 
                    required 
                    value={title} 
                    onChange={e => {setTitle(e.target.value)}}
                />

                <label>Blog Body</label>
                <textarea 
                    required 
                    value={body} 
                    onChange={e => {setBody(e.target.value)}}
                >
                </textarea>

                <label>Blog Author</label>
                <select 
                    value={author} 
                    onChange={e => {setAuthor(e.target.value)}}
                >
                    <option value="Jan">Jan</option>
                    <option value="Peter">Peter</option>
                </select>

                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;