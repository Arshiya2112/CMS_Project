import React from "react";
import img1 from "/Checklist.jpg";
function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  my-10">


                <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
                    <div className="space-y-12">
                        <h1 className="text-6xl font-bold">
                            Welcome to Studious
                        </h1>
                        <p className="text-2xl text-purple-700">
                            Confused on how to get started with your syllabus? We have got you covered! Browse subjects and choose the best one for you.
                            <br/> <br/>We at Studious bring learning at your ease!
                            <br/> From Discrete Mathematics to Research Methods in Informatics, from Software Engineering to System Design we have got you covered. Head now to our courses section, signup and get ahead with your syllabus in time.</p>
                            <br/><p className="text-2xl font-semibold text-purple-700">Start Learning Today!</p> 
                        
                    </div>

                </div>

                <div className="order-1 w-full md:w-1/2">
                    <img src={img1} alt=""  className="w-700 h-700"/>

                </div>
            </div>
        </>
    )
}

export default Banner;