const BlogList = ({blogs, title, handleDel}) => {
    // const blogs = props.blogs;
    

    return ( 
        <div className="blog-list">
        <h2> { title } </h2>
        {
            blogs.map(blog => (

                        <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>written by: {blog.author}
                        <button onClick={()=> handleDel(blog.id)}>delete</button>
                        </p>
                        

                        </div>
                    ))
        }

        </div>
     );
}
 
export default BlogList;