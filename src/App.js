import { useState } from "react";
import StudentCard from "./StudentsCard";
import "./style.css";

function App() {
  const students = [
    { rollno: "CS/20/01", name: "Abhijit Rauth" },
    { rollno: "CS/20/02", name: "Arghya Ghosh" },
    { rollno: "CS/20/03", name: "Arindam Ojha" },
    { rollno: "CS/20/04", name: "Atiqur Rahman" },
    { rollno: "CS/20/05", name: "Bandana Nanda" },
    { rollno: "CS/20/06", name: "Debayan Ghosh" },
    { rollno: "CS/20/07", name: "Debjyoti Adak" },
    { rollno: "CS/20/08", name: "Hrithik Das" },
    { rollno: "CS/20/09", name: "Mubassir Ali" },
    { rollno: "CS/20/12", name: "Nimai Chand Giri" },
    { rollno: "CS/20/13", name: "Piu Mondal" },
    { rollno: "CS/20/14", name: "Rupam Mukherjee" },
    { rollno: "CS/20/15", name: "Saikat Ghosh" },
    { rollno: "CS/20/16", name: "Sk Moksadul Rahman" },
    { rollno: "CS/20/17", name: "Snahashis Kanrar" },
    { rollno: "CS/20/18", name: "Sougata Das" },
    { rollno: "CS/20/19", name: "Soumik Mukherjee" },
    { rollno: "CS/20/20", name: "Soumyajit Paramanick" },
    { rollno: "CS/20/21", name: "Souvik Mondal" },
    { rollno: "CS/20/22", name: "Sujoy Sarkar" },
    { rollno: "CS/20/23", name: "Suman Paul" },
    { rollno: "CS/20/24", name: "Sutapa Das" },
    { rollno: "CS/20/25", name: "Suvojit Baidya" },
    { rollno: "CS/20/26", name: "Swarup Kumar Supakar" },
    { rollno: "CS/20/27", name: "Tofayel Molla" },
    { rollno: "CS/20/30", name: "Yogesh Summan" },
  ];

  const [presentStudents, setPresentStudents] = useState([]);
  const [presentStudentList, setPresentStudentList] = useState("");

  const handleClick = () => {
    let count = 1;
    const reducedArray = presentStudents.map((presentStudents) => {
      return (
        <p key={presentStudents.rollno}>
          {count++}. {presentStudents.name} ({presentStudents.rollno})
        </p>
      );
    });

    console.log(reducedArray);
    setPresentStudentList(reducedArray);
  };

  const createList = (name, rollno) => {
    setPresentStudents([...presentStudents, { name: name, rollno: rollno }]);
  };

  const renderedBooks = students.map((students) => {
    return (
      <StudentCard
        key={students.rollno}
        student={students}
        createList={createList}
      />
    );
  });

  return (
    <div className="container">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="student-list">{renderedBooks}</div>
      <button onClick={handleClick} className="generate-button">
        Generate
      </button>
      <div className="present-student-list">{presentStudentList}</div>
    </div>
  );
}

export default App;
