import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();
    const {data: blogDetails, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blogDetails.id, {
            method: "DELETE"
        })
        .then(() => {
            navigate("/");
        })
    }

    return (  
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogDetails && (
                <article>
                    <h2>{ blogDetails.title }</h2>
                    <p>Written by { blogDetails.author }</p>
                    <div>{ blogDetails.body }</div>
                    <button onClick={ handleDelete }>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;