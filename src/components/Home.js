import { useState, useEffect } from "react";
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

  const [name, setName] = useState("Taninchot");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id); // ถ้าต้องการให้ลบออกต้องทำให้เป็น false
    setBlogs(newBlogs); // เอามาจากตอน useState
  };

  useEffect(() => {
    // จะทำงานเมื่อเกิดการ Re-Render
    console.log("useEffect ran");
    console.log(name);
  }, []); // การใส่ Array เนี่ยเหมือนเป็นการตั้งว่าจะใช้ useEffect กับแค่ใน Array นี้และเริ่มต้น

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
