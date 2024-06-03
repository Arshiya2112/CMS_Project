import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </Link>
                        </form>
                        <h3 className="font-bold text-xl">Login</h3>
                        <div className="mt-4 space-y-2">
                            <span className="font-semibold text-lg">Email</span>
                            <br />
                            <input type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none" />
                        </div>

                        <div className="mt-4 space-y-2">
                            <span className="font-semibold text-lg">Password</span>
                            <br />
                            <input type="text"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 border rounded-md outline-none" />
                        </div>

                        <div className="flex justify-around mt-4">
                            <button
                                className="bg-purple-700 text-white font-semibold text-xl rounded-md px-3 py-1 hover:bg-purple-900 duration-200 ">
                                Login</button>
                            <p className="font-semibold text-lg">Not registered?
                                <Link to="/signup" className="underline
                         text-blue-500 cursor-pointer"> Signup
                                </Link> {" "}
                            </p>
                        </div>

                    </div>
                </dialog>
            </div>
        </>
    );
}

export default Login;