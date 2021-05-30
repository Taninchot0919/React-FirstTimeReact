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

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id != id); // ถ้าต้องการให้ลบออกต้องทำให้เป็น false
    setBlogs(newBlogs); // เอามาจากตอน useState
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />{/* เหมือนเรา parse method ผ่าน props ให้มันลิ้งกัน พอมันลิ้งกัน parent ก็รู้ id ที่ child ส่งมา */}
    </div>
  );
};

export default Home;
