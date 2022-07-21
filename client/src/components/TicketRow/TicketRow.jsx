import React from "react";

const TicketRow = (ticket) => {
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
            <td className="sticky left-0 p-4 bg-white">
                <label className="sr-only" htmlFor={ticket.id}>Row 1</label>
                <input
                    className="w-5 h-5 border-gray-200 rounded"
                    type="checkbox"
                    id={ticket.Id}
                />
            </td>
            <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{ticket.title}</td>
            <td className="p-4 text-gray-700 whitespace-nowrap">{`${ticket.createdOn.toLocaleDateString()} ${ticket.createdOn.toLocaleTimeString()}`}</td>
            <td className="p-4 text-gray-700 whitespace-nowrap">{`${ticket.updatedAt.toLocaleDateString()} ${ticket.updatedAt.toLocaleTimeString()}`}</td>
            {renderTicketPriority(ticket.priority)}
            {renderTicketStatus(ticket.status)}
            <td className="p-4 text-gray-700 whitespace-nowrap">{ticket.type}</td>
        </>
    );
}

export default TicketRow;