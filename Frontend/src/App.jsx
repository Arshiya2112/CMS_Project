import React from "react";
import Course from "./components/Course";
import Courses from "./courses/Courses";
import Homeb from "./homebody/Homeb";
import Signup from "./components/Signup";
import { Routes, Route } from 'react-router-dom';
import About from "./about/About";
import Contact from "./contact/Contact";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homeb />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App