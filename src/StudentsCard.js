import "./style.css";

function StudentCard({ student, createList }) {
  const handleClick = () => {
    createList(student.name, student.rollno);
  };

  return (
    <div className="student-card" dataname={student.name} onClick={handleClick}>
      <p>{student.name}</p>
      <p>{student.rollno}</p>
    </div>
  );
}

export default StudentCard;
