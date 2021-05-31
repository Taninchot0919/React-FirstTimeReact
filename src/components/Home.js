import { useState, useEffect } from "react";
import BlogList from "./BlockList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:9000/blogs") // fetch ปกติเลยจ้า
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);
  }, []); // การใส่ Array เนี่ยเหมือนเป็นการตั้งว่าจะใช้ useEffect กับแค่ใน Array นี้และเริ่มต้น

  return (
    <div className="home">
      {isPending && <div>Loading ....</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
      {/* เพราะว่าไอ่บรรทัดที่ 5 อะเรา set เป็น null ไว้ไอ่เจ้า blogs ก็เลยเป็น null การทำแบบทำให้แสดงผลได้ งงมั้ย งงเหมือนกัน */}
    </div>
  );
};

export default Home;
