import { useState } from "react";
import BlogList from "./BlockList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My Title 1",
      body: "lorem ipsum ...",
      author: "Taninchot",
      id: 1,
    },
    {
      title: "My Title 2",
      body: "lorem ipsum ...",
      author: "Taninchot",
      id: 2,
    },
    {
      title: "My Title 3",
      body: "lorem ipsum ...",
      author: "Phuwaloertthiwat",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author == "Taninchot")}
        title="Taninchot blogs"
      />
    </div>
  );
};

export default Home;
