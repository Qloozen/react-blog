const BlogList = ({blogs, title, handleDelete}) => {
    // Using destructuring makes this easier
    // const blogs = props.blogs;
    // const title = props.title;
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                // "key=" defines a unique identifier of an item in the list
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;