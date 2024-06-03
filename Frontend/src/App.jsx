import React from "react";
import Course from "./components/Course";
import Courses from "./courses/Courses";
import Homeb from "./homebody/Homeb";
import Signup from "./components/Signup";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homeb />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App