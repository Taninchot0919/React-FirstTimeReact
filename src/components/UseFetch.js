import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); // เราตั้งเป็น data เพราะว่าหากเราใช้ที่อื่นจะได้ง่ายๆ
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * คือมันจะมีปัญหาตรงที่ว่าถ้าเรากดเปลี่ยน tab เร็วๆเนี่ยมันจะทำไม่ได้มันจะติด error เหมือนมัน fetch มาแต่ไม่รู้เอาข้อมูลไว้ตรงไหน
     * เราก็เลยต้องสร้างตัวควบคุมการยกเลิกเข้ามา
     */
    const abortController = new window.AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal }) // ส่งว่าเราจะเอาหรือไม่เอาข้อมูลแล้วไปด้วย ควบคู่กับการ fetch ธรรมดา
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
          if (err.name === "AbortError") {
            console.log("fetch abort");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);
    return () => abortController.abort(); // เป็นการบอกว่าเราไม่เอาข้อมูลแล้วโว้ยยยย
  }, [url]); // ถ้า url เปลี่ยนมันจะ reload data ใหม่

  return { data, isPending, error };
};
export default useFetch;
