import React, { useState } from "react";

const StudentsList = () => {
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
    { rollno: "CS/21L/19", name: "Shreya Das" },
    { rollno: "CS/21L/06", name: "Ekant Singh" },
    { rollno: "EC/20/01", name: "Debajyoti Sanyal" },
    { rollno: "EC/20/02", name: "Devjit Mondal" },
    { rollno: "EC/20/03", name: "Gopal Kundu" },
    { rollno: "EC/20/04", name: "Suvradip Maity" },
  ];

  const [selectedStudents, setSelectedStudents] = useState([]);
  const copyAttendance = () => {
    const newText = selectedStudents
      .map(
        (student, index) => `${index + 1}. ${student.name} (${student.rollno})`
      )
      .join("\n");
    navigator.clipboard.writeText(newText);
  };

  const handleClick = (student) => {
    if (selectedStudents.some((s) => s.rollno === student.rollno)) {
      setSelectedStudents(
        selectedStudents.filter((s) => s.rollno !== student.rollno)
      );
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center pt-8 pb-6">
        {students.map((student) => {
          const isSelected = selectedStudents.some(
            (s) => s.rollno === student.rollno
          );

          return (
            <div
              key={student.rollno}
              onClick={() => handleClick(student)}
              className={`border w-4/5 flex border-gray-600 rounded-md overflow-hidden text-gray-200 ${
                isSelected ? "text-green-400" : ""
              }`}
            >
              <div className="flex justify-center items-center h-full w-12 bg-tea mr-4 text-2xl text-gray-300 bg-gray-600">
                {`${student.name.split(" ")[0][0]}${
                  student.name.split(" ")[1][0]
                }`}
              </div>
              <div>
                <h3>{student.name}</h3>
                <p>{student.rollno}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-gray-400">
        {selectedStudents.map((student, index) => (
          <div key={student.rollno} className="flex gap-1 pl-10">
            <p>{index + 1}.</p>
            <p>{student.name}</p>
          </div>
        ))}
        <div className="flex justify-center">
          <button
            className="bg-yellow-400 text-xl text-gray-800 px-4 py-2 rounded-md mt-5"
            onClick={copyAttendance}
          >
            Copy
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentsList;
