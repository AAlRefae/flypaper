import React from "react";
import { Link } from "react-router-dom";


const ProjectItem = ({ projectValue }) => {
    return (
        <>
            <td>
                <Link to={`../tickets/${projectValue.id}`}>
                    <p className="p-4 font-medium text-gray-900 whitespace-nowrap">{projectValue.title}</p>
                </Link>
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">{`${projectValue.createdOn.toLocaleDateString()} ${projectValue.createdOn.toLocaleTimeString()}`}</td>
            <td className="p-4 text-gray-700 whitespace-nowrap">{`${projectValue.updatedAt.toLocaleDateString()} ${projectValue.updatedAt.toLocaleTimeString()}`}</td>
            <td className="p-4 text-gray-700 whitespace-nowrap">{projectValue.type}</td>
            <td>
                <Link to={`../tickets/pid-${projectValue.id}`}>
                    <button className="bg-blue-700 p-2 font-medium text-gray-100 whitespace-nowrap rounded-lg">View
                        Tickets
                    </button>
                </Link>
            </td>
        </>
    );
}

export default ProjectItem;