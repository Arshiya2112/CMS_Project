import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";


function About() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <AboutUs/>
            </div>
            <Footer />
        </>
    );
}

export default About;