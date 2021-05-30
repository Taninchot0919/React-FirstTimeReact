import { useState, useEffect } from "react";
import BlogList from "./BlockList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []); // การใส่ Array เนี่ยเหมือนเป็นการตั้งว่าจะใช้ useEffect กับแค่ใน Array นี้และเริ่มต้น

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;
