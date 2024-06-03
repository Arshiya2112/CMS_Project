import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import React from "react";
import list from "../../public/list.json"
function FreeCourse() {

    const filterData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-20 ">
                    {/* <h1 className="font-medium text-xl pb-2 "></h1> */}
                    <p className="font-medium text-xl pb-2">Have a look at the structured syllabus designed just for you. Each subject is divided into topics to make your learning easier and more organized. So what are you waiting for? Signup and get started!</p>
                </div>


                <div>
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <Cards item={item} key={item.id}/>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeCourse;