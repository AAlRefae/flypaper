import React, { useRef, useState } from "react";

const TicketItem = ({ ticketValue }) => {
    const [checked, setChecked] = useState(false);
    const checkBox = useRef(null);

    const handleClick = () => {
        if (checked) {
            setChecked(false);
            checkBox.current.checked = false;
            console.log(checked)
        } else {
            setChecked(true);
            checkBox.current.checked = true;
            console.log(checked)
        }
    }

    const renderTicketPriority = priority => {
        switch (priority.toString().toLowerCase().trim()) {
            case "low":
                return (
                    <td className="p-4 whitespace-nowrap">
                        <strong
                            className="bg-blue-500 text-white px-3 py-1.5 rounded text-xs font-medium">
                            Low
                        </strong>
                    </td>
                )
            case "medium":
                return (
                    <td className="p-4 whitespace-nowrap">
                        <strong
                            className="bg-orange-500 text-white px-3 py-1.5 rounded text-xs font-medium">
                            Medium
                        </strong>
                    </td>
                )
            case "high":
                return (
                    <td className="p-4 whitespace-nowrap">
                        <strong
                            className="bg-red-600 text-white px-3 py-1.5 rounded text-xs font-medium">
                            High
                        </strong>
                    </td>
                )
            default:
                return (
                    <td className="p-4 whitespace-nowrap">
                        <strong
                            className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                            Undefined
                        </strong>
                    </td>
                )
        }
    };

    const renderTicketStatus = status => {
        switch (status.toString().toLowerCase().trim()) {
            case "unassigned":
                return (
                    <td className="p-4 text-gray-700 whitespace-nowrap">Unassigned</td>
                )
            case "assigned":
                return (
                    <td className="p-4 text-gray-700 whitespace-nowrap">Assigned</td>
                )
            case "closed":
                return (
                    <td className="p-4 text-gray-700 whitespace-nowrap">Closed</td>
                )
            default:
                return (
                    <td className="p-4 text-gray-700 whitespace-nowrap">Undefined</td>
                )
        }
    };

    return (
        <>
            <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{ticketValue.title}</td>
            <td className="p-4 text-gray-700 whitespace-nowrap">{`${ticketValue.createdOn.toLocaleDateString()} ${ticketValue.createdOn.toLocaleTimeString()}`}</td>
            <td className="p-4 text-gray-700 whitespace-nowrap">{`${ticketValue.updatedAt.toLocaleDateString()} ${ticketValue.updatedAt.toLocaleTimeString()}`}</td>
            {renderTicketPriority(ticketValue.priority)}
            {renderTicketStatus(ticketValue.status)}
            <td className="p-4 text-gray-700 whitespace-nowrap">{ticketValue.type}</td>
        </>
    );
}

export default TicketItem;