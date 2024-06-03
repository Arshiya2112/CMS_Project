import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
    return (
        <>
            <div>
                {/* <div className="hero min-h-screen" style={{ backgroundImage: 'img1.jpg' }}> */}
                <div className="hero min-h-screen ">
                    <div className=" "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold text-purple-700">Hello Student <br /> <span className="text-2xl font-bold">Come get to know us!</span></h1>
                            <p className="mb-5 text-purple-700">We, the students of IIC, UDSC, developed Studious in an attempt to make learning easier and accessible to all IICians. Through our structured platform, students find it convenient to learn, engage and discuss.</p>
                            <Link to="/" className="font-bold text-lg btn btn-primary bg-blue-700 text-white hover:bg-white hover:text-purple-700">Start Learning</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;