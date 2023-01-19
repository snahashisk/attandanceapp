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
        backgroundColor: isActive ? "#9BC53D" : "",
        color: isActive ? "white" : "",
      }}
    >
      <p>{student.name}</p>
      <p>{student.rollno}</p>
    </div>
  );
}

export default StudentCard;
