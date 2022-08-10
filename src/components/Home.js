import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const [students, setStudents] = useState([]);
  const isEmpty = students.length === 0;

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
      <h2>List of students</h2>

      {!isEmpty &&
        students.map((student) => {
          return <p>{student.name}</p>;
        })}
    </div>
  );
};

export default Home;
