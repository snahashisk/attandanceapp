import "./style.css";
import { useState } from "react";

function StudentCard({ student, createList }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    createList(student.name, student.rollno);
    setIsActive((current) => !current);
  };

  return (
    <div
      className="student-card"
      dataname={student.name}
      onClick={handleClick}
      style={{
        backgroundColor: isActive ? "#68CA6D" : "",
        color: isActive ? "white" : "",
        border: isActive ? "none" : "",
      }}
    >
      <p>{student.name}</p>
      <p>{student.rollno}</p>
    </div>
  );
}

export default StudentCard;
