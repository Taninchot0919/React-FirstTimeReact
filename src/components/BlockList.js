// const BlogList = (props) => { // วิธีที่รับ prop วิธีที่ 1
//   const blogs = props.blogs;
//   const title = props.title;
const BlogList = ({ blogs, title }) => { // วิธีรับ prop วิธีที่ 2
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By : {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
