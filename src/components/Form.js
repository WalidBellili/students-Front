import React from "react";

const Form = () => {
  const [student, setStudents] = useState([]);

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
    console.log("fff");

    const student = {
      name: "sjeisfjc",
    };

    const request = await fetch(`http://localhost:5000/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    const response = await request.json();
  };

  return (
    <div>
      <form action="">
        <label htmlFor="text">Add your Jacky</label>
        <input type="text" id="text" />
      </form>
    </div>
  );
};

export default Form;
