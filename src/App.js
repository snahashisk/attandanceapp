import React, { useState, useEffect } from "react";
import StudentsList from "./components/StudentsList";
const App = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleDateString());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 w-full py-8 lg:px-32 md:px-8">
      <h1 className="text-center text-gray-100 text-4xl font-medium">
        Take Attendance
      </h1>
      <div className="text-gray-200 flex justify-center gap-4 mt-2">
        <div className="flex gap-1">
          <p>Time:</p>
          <p>{currentTime}</p>
        </div>
        <div className="flex gap-1">
          <p>Date:</p>
          <p>{currentDate}</p>
        </div>
      </div>
      <StudentsList />
    </div>
  );
};

export default App;
