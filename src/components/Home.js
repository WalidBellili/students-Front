import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch("http://localhost:5000/students/");
    const response = await request.json();

    setStudents(response);
    // console.log(response);
  };

  return (
    <div>
      {students.map((student) => {
        return <p>{student.name}</p>;
      })}
    </div>
  );
};

export default Home;
