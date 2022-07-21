import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <section className="relative">
            <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:px-8 lg:h-screen lg:items-center
            lg:flex sm:bg-gradient-to-r sm:from-white sm:to-transparent">
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Lorem ipsum dolor
                        <strong className="font-extrabold text-blue-700 sm:block">
                            sit amet.
                        </strong>
                    </h1>

                    <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8 text-center">
                        {/* Login */}
                        <Link to="dashboard"
                            className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-blue-600
                            sm:w-auto active:bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring"
                        >Login
                        </Link>

                        {/* Register */}
                        <Link to="register"
                            className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-blue-600
                            sm:w-auto hover:text-blue-700 hover:bg-gray-100 active:text-blue-500 focus:outline-none focus:ring"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home