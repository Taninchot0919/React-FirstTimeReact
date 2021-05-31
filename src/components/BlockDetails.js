import React from "react";
import { useParams } from "react-router";
import useFetch from "./UseFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:9000/blogs/" + id);

  return (
    <div className="blog-details">
      {isPending && <div>Loading ...</div>}{" "}
      {/*จะทำงานก็ต่อเมื่อด้านซ้ายเป็นจริง */}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by : {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
