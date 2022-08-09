import './App.css';
import { Outlet, Navigate, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./views/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Overview from "./views/Dashboard/Overview";
import Projects from "./views/Dashboard/Projects";
import Tickets from "./views/Dashboard/Tickets";
import Roles from "./views/Dashboard/Roles";
import Users from "./views/Dashboard/Users";
import Profile from "./views/Dashboard/Profile";

// Temp data
let user = true;

const App = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route element={<ProtectedRoute user={user} />}>
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route path="overview" element={<Overview />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="tickets" element={<Tickets />}>
                            <Route path=":projectId" element={<Tickets />} />
                        </Route>
                        {/*<Route path="tickets" element={<Tickets />} />*/}
                        <Route path="roles" element={<Roles />} />
                        <Route path="users" element={<Users />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
