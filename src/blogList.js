const BlogList = ({blogs, title, handleDelete}) => {
  // console.log(props.blogs)
  return ( 
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{ blog.title }</h2>
            <p> Written by: { blog.author }</p>
            <button onClick={() => handleDelete(blog.id)}>Delete Me</button>
          </div>
        ))}
    </div>
   );
}
 
export default BlogList;