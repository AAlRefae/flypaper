import React from "react";
import { Link } from "react-router-dom";
import { BiHome, BiBookContent, BiTask, BiUser, BiKey, BiGroup, BiLogIn } from "react-icons/bi/";

const iconSize = "25";

const Navbar = () => {

    // TODO navbar state

    return (
        <div className="flex flex-col justify-between w-16 h-screen bg-white border-r z-40 fixed sm:sticky top-0 z-50">
            <div>
                {/* Profile Thumbnail */}
                <div className="inline-flex items-center justify-center w-16 h-16">
                    <span className="block w-10 h-10 bg-gray-200 rounded-lg"></span>
                </div>
                <div className="border-t border-gray-100">
                    <nav className="flex flex-col p-2">
                        {/* Overview */}
                        <div className="py-4">
                            <Link to="overview">
                                <span
                                    className="flex justify-center px-2 py-1.5 t text-blue-700 rounded bg-blue-50 group relative">
                                    <BiHome size={iconSize} />
                                    <span
                                        className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">Overview</span>
                                </span>
                            </Link>
                        </div>

                        <ul className="pt-4 space-y-1 border-t border-gray-100">
                            {/* Projects */}
                            <li>
                                <Link to="projects">
                                    <span
                                        className="flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group">
                                    <BiBookContent size={iconSize} />
                                    <span
                                        className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">Projects</span>
                                </span>
                                </Link>
                            </li>
                            {/* Tickets */}
                            <li>
                                <Link to="tickets">
                                <span
                                    className="flex relative group justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700">
                                    <BiTask size={iconSize} />
                                    <span
                                        className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">Tickets</span>
                                </span>
                                </Link>
                            </li>
                            {/* Role Assignment */}
                            <li>
                                <Link to="roles">
                                    <span
                                        className="flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group">
                                    <BiKey size={iconSize} />
                                    <span
                                        className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">Roles</span>
                                    </span>
                                </Link>
                            </li>
                            {/* Manage Users */}
                            <li>
                                <Link to="users">
                                    <span
                                        className="relative group flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700">
                                    <BiGroup size={iconSize} />
                                    <span
                                        className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">Users</span>
                                    </span>
                                </Link>
                            </li>
                            {/* Profile */}
                            <li>
                                <Link to="profile">
                                    <span
                                        className="flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group">
                                        <BiUser size={iconSize} />
                                        <span
                                            className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">Profile</span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


            <div className="sticky inset-x-0 bottom-0 p-2 bg-white border-t border-gray-100">
                <form action="/logout">
                    <button
                        type="submit"
                        className="flex justify-center w-full px-2 py-1.5 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 group relative">
                        <BiLogIn size={iconSize} />
                        <span
                            className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">Logout</span>
                    </button>
                </form>
            </div>
        </div>);
}

export default Navbar;