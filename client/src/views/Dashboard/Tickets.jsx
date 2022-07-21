import React from "react";
import TicketRow from "../../components/TicketRow/TicketRow";
// Temp data
import { ticketData } from "../../assets/data/tempData";


const Tickets = () => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm divide-y divide-gray-200">
                    <thead>
                    <tr>
                        <th className="sticky left-0 p-4 text-left bg-white">
                            <label className="sr-only" htmlFor="row_all">Select All</label>
                            <input
                                className="w-5 h-5 border-gray-200 rounded"
                                type="checkbox"
                                id="row_all"
                            />
                        </th>
                        <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                            <div className="flex items-center">
                                Name
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 ml-1.5 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                            <div className="flex items-center">
                                Created
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 ml-1.5 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                            <div className="flex items-center">
                                Updated
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 ml-1.5 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                            <div className="flex items-center">
                                Priority
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 ml-1.5 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                            <div className="flex items-center">
                                Status
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 ml-1.5 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                            <div className="flex items-center">
                                Type
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 ml-1.5 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    {/*// TODO finish ticket component*/}
                    <tbody className="divide-y divide-gray-100">
                    {ticketData.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            {TicketRow(currentTicket)}
                        </tr>

                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Tickets;