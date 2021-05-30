import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My Title 1",
      body: "lorem ipsum ...",
      author: "Taninchot",
      id: 1,
    },
    { title: "My Title 2", body: "lorem ipsum ...", author: "Art", id: 2 },
    {
      title: "My Title 3",
      body: "lorem ipsum ...",
      author: "Phuwaloertthiwat",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By : {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
