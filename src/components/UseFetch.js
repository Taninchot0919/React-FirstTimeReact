import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); // เราตั้งเป็น data เพราะว่าหากเราใช้ที่อื่นจะได้ง่ายๆ
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url) // fetch ปกติเลยจ้า
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch the data from that resource");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, [url]); // ถ้า url เปลี่ยนมันจะ reload data ใหม่

  return { data, isPending, error };
};
export default useFetch;
