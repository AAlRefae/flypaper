import React from "react";
import { Link } from "react-router-dom";
// Testing purposes
const admin = true;

const userItem = ({ userValue }) => {
    return (
        <>
            <td>
                <Link to={`../tickets/${userValue.id}`}>
                    <p className="p-4 font-medium text-gray-900 whitespace-nowrap">{userValue.username}</p>
                </Link>
            </td>

            <td className="p-4 text-gray-700 whitespace-nowrap">{userValue.firstName}</td>
            <td className="p-4 text-gray-700 whitespace-nowrap">{userValue.lastName}</td>
            <td className="p-4 text-gray-700 whitespace-nowrap">{userValue.email}</td>
            <td className="p-4 text-gray-700 whitespace-nowrap">{userValue.role}</td>
            <td className="p-4 text-gray-700 whitespace-nowrap">{`${userValue.createdOn.toLocaleDateString()} ${userValue.createdOn.toLocaleTimeString()}`}</td>
            <td>
                <Link to={`../users/details/uid-${userValue.id}`}>
                    <button className="bg-blue-700 p-2 font-medium text-gray-100 whitespace-nowrap rounded-lg">View
                        Profile
                    </button>
                </Link>
            </td>
            {admin ?
                <td>
                    <Link to={`../tickets/pid-${userValue.id}`}>
                        <button className="bg-blue-700 p-2 font-medium text-gray-100 whitespace-nowrap rounded-lg">
                            Modify User
                        </button>
                    </Link>
                </td>
                :
                <></>
            }
        </>
    );
}

export default userItem;