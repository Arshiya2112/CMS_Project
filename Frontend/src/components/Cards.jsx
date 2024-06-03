import React from "react";

function Cards({item}) {

    return (
        <>
            <div className="mt-5 my-3 p-3 ">
                <div className="card w-92 h-full bg-base-100 shadow-xl hover:scale-105 duration-200 ">
                    <figure className="px-10 pt-10">
                        <img src={item.image} alt="IoT" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.name}
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions flex">
                            <button className="btn btn-primary hover:text-blue-400 hover:bg-white duration-200 cursor-pointer">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;