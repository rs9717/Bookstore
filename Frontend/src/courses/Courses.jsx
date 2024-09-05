import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <div className=" min-h-screen">
        <Course searchQuery={searchQuery} />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
