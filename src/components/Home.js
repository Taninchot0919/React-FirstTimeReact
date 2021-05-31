import { useState, useEffect } from "react";
import BlogList from "./BlockList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:9000/blogs") // fetch ปกติเลยจ้า
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch the data from that resource");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, []); // การใส่ Array เนี่ยเหมือนเป็นการตั้งว่าจะใช้ useEffect กับแค่ใน Array นี้และเริ่มต้น

  return (
    <div className="home">
      {error && <div>{error}</div>} {/* เข้าใจว่า หมายความว่าถ้าเป็น null ไว้จะไม่มีค่าใช่มะ พอมันมีค่าเมื่อไรก็จะมีค่าขึ้นมาเลย */}
      {isPending && <div>Loading ....</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;
