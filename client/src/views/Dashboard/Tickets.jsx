import React, { useEffect, useState } from "react";
import { RiArrowUpDownLine, RiSearchLine } from "react-icons/ri";
import TicketList from "../../components/TicketList/TicketList";
// Temp data
import { ticketData } from "../../assets/data/tempData";

const iconSize = "16";
const iconColour = "grey";

const Tickets = () => {
    const [query, setQuery] = useState("");
    const [SortType, setSortType] = useState("nameAscending");
    const [filteredTicketList, setFilteredTicketList] = useState(ticketData);

    useEffect(() => {
        if (query.length === 0) {
            setFilteredTicketList(ticketData);
        }
        setFilteredTicketList(ticketData.filter(ticket => {
            return ticket.title.toLowerCase().trim().includes(query.toLowerCase().trim())
                || ticket.type.toLowerCase().trim().includes(query.toLowerCase().trim())
                || ticket.status.toLowerCase().trim().includes(query.toLowerCase().trim());
        }))
    }, [query])

    return (
        <>
            <div className="flex mx-auto">
                <h1 className="text-xl mx-auto sm:text-3xl pt-3 pl-3 sm:m-0 sm:mr-auto my-auto text-gray-600">Project:
                    Title</h1>

                <div className="hidden sm:flex items-center space-x-4 justify-end pt-3 pr-12 ml-auto">
                    <form className="hidden mb-0 lg:flex">
                        <div className="relative text">
                            <input
                                className="h-10 pr-10 text-sm placeholder-gray-400 border-gray-300 rounded-lg focus:z-10"
                                placeholder="Search..."
                                type="text"
                                onChange={event => setQuery(event.target.value)}
                            />

                            <button
                                className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
                                type="submit"
                            >
                                <RiSearchLine size={iconSize} color={iconColour} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {filteredTicketList.length === 0 ?
                <div className="mx-auto my-52 w-1/3 h-auto">
                    <h3 className="text-3xl text-center text-gray-600 self-center bg-gray-100 rounded-xl p-6">No Results
                        Found</h3>
                </div>
                :
                <div className="overflow-x-auto ml-14 sm:ml-0">
                    <table className="min-w-full text-sm divide-y divide-gray-200">
                        <thead>
                        <tr>
                            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                <div className="flex items-center" onClick={() => (setSortType(SortType === "nameAscending" ? "nameDescending" : "nameAscending"))}>
                                    Name
                                    <RiArrowUpDownLine size={iconSize} color={iconColour} />
                                </div>
                            </th>
                            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                <div className="flex items-center" onClick={() => (setSortType(SortType === "createdAscending" ? "createdDescending" : "createdAscending"))}>
                                    Created
                                    <RiArrowUpDownLine size={iconSize} color={iconColour} />
                                </div>
                            </th>
                            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                <div className="flex items-center" onClick={() => (setSortType(SortType === "updatedAscending" ? "updatedDescending" : "updatedAscending"))}>
                                    Updated
                                    <RiArrowUpDownLine size={iconSize} color={iconColour} />
                                </div>
                            </th>
                            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                <div className="flex items-center" onClick={() => (setSortType(SortType === "priorityAscending" ? "priorityDescending" : "priorityAscending"))}>
                                    Priority
                                    <RiArrowUpDownLine size={iconSize} color={iconColour} />
                                </div>
                            </th>
                            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                <div className="flex items-center" onClick={() => (setSortType(SortType === "statusAscending" ? "statusDescending" : "statusAscending"))}>
                                    Status
                                    <RiArrowUpDownLine size={iconSize} color={iconColour} />
                                </div>
                            </th>
                            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                <div className="flex items-center" onClick={() => (setSortType(SortType === "typeAscending" ? "typeDescending" : "typeAscending"))}>
                                    Type
                                    <RiArrowUpDownLine size={iconSize} color={iconColour} />
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                        <TicketList list={filteredTicketList} sortType={SortType} />
                        </tbody>
                    </table>
                </div>}
        </>
    );
}

export default Tickets;