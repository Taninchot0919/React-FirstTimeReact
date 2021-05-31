import BlogList from "./BlockList";
import useFetch from "./UseFetch";

const Home = () => {
  // เอา data มาแล้วตั้งชื่อมันว่า blogs
  const { data: blogs, isPending, error } = useFetch("http://localhost:9000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}{" "}
      {/* เข้าใจว่า หมายความว่าถ้าเป็น null ไว้จะไม่มีค่าใช่มะ พอมันมีค่าเมื่อไรก็จะมีค่าขึ้นมาเลย */}
      {isPending && <div>Loading ....</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;
