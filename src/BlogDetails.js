import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const {data: blogDetails, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);

    return (  
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogDetails && (
                <article>
                    <h2>{ blogDetails.title }</h2>
                    <p>Written by { blogDetails.author }</p>
                    <div>{ blogDetails.body }</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;