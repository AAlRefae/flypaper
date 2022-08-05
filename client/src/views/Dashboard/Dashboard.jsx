import React from "react";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

let loading = false; // For testing

const Dashboard = () => {
    if (!loading) {
        return (
            <div className="sm:flex sm:mx-auto">
                <Navbar />
                <div className="sm:flex-grow sm:mx-auto">
                    <Outlet />
                </div>

            </div>
        );
    }
    return (
        <div className="flex mx-auto">
            <Navbar />
            <Loading />
        </div>
    )
};

export default Dashboard;