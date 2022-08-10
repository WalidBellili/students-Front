import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [student, setStudents] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getStudentsData();
  }, []);

  const getStudentsData = async () => {
    const request = await fetch("http://localhost:5000/students");
    const response = await request.json();
    setStudents(response);
  };

  const postStudent = async (e) => {
    e.preventDefault();
    // console.log(e.target.secondChild.value);

    const student = {
      name: e.target.children[1].value,
    };
    console.log(student);

    const request = await fetch(`http://localhost:5000/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    const response = await request.json();
    navigate("../students", { replace: true });
  };

  return (
    <div>
      <form action="" onSubmit={postStudent}>
        <label htmlFor="text">Add your Jacky</label>
        <input type="text" id="text" />
        <button type="submit">btn</button>
      </form>
    </div>
  );
};

export default Form;
