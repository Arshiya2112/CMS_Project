import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">Welcome{" "}
                        <span className="text-purple-700"> Student!</span> Happy to have you here!
                    </h1>
                    <p className="mt-12 text-xl">
                        Click on the card and navigate to the syllabus of the course prescribed in during the MSc Informatics course - Semester 1 to Semester 4
                    </p>
                    <Link to="/">
                        <button className="mt-6 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-900 duration-300 text-xl">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {
                        list.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course;