import React from 'react';
import TicketItem from "../TicketItem/TicketItem";

const TicketList = ({ list, sortType }) => {
    let sortedList = list;
    switch (sortType) {
        case "nameAscending": {
            sortedList.sort((a, b) => {
                    let x = a.title.toLowerCase();
                    let y = b.title.toLowerCase();
                    if (x < y) {
                        return -1;
                    }
                    if (x > y) {
                        return 1;
                    }
                    return 0;
                }
            )
        }
            return (
                <>
                    {sortedList.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            )
        case "nameDescending": {
            sortedList.sort((a, b) => {
                    let x = a.title.toLowerCase();
                    let y = b.title.toLowerCase();
                    if (y < x) {
                        return -1;
                    }
                    if (y > x) {
                        return 1;
                    }
                    return 0;
                }
            )
        }
            return (
                <>
                    {sortedList.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            )
        case "createdAscending": {
            sortedList.sort((a, b) => {
                    return new Date(a.createdOn) - new Date(b.createdOn)
                }
            )
            return (
                <>
                    {sortedList.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            )
        }
        case "createdDescending": {
            sortedList.sort((a, b) => {
                    return new Date(b.createdOn) - new Date(a.createdOn)
                }
            )
            return (
                <>
                    {sortedList.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            )
        }
        case "updatedAscending": {
            sortedList.sort((a, b) => {
                    return new Date(a.updatedAt) - new Date(b.updatedAt)
                }
            )
            return (
                <>
                    {sortedList.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            )
        }
        case "updatedDescending": {
            sortedList.sort((a, b) => {
                    return new Date(b.updatedAt) - new Date(a.updatedAt)
                }
            )
            return (
                <>
                    {sortedList.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            )
        }
        case "priorityAscending": {
            sortedList.sort((a, b) => {
                    let x = a.priority.toLowerCase();
                    let y = b.priority.toLowerCase();
                    if (x < y) {
                        return -1;
                    }
                    if (x > y) {
                        return 1;
                    }
                    return 0;
                }
            )
        }
            return (
                <>
                    {sortedList.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            )
        case "priorityDescending": {
            sortedList.sort((a, b) => {
                    let x = a.priority.toLowerCase();
                    let y = b.priority.toLowerCase();
                    if (y < x) {
                        return -1;
                    }
                    if (y > x) {
                        return 1;
                    }
                    return 0;
                }
            )
        }
            return (
                <>
                    {sortedList.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            )
        case "statusAscending": {
            sortedList.sort((a, b) => {
                    let x = a.status.toLowerCase();
                    let y = b.status.toLowerCase();
                    if (x < y) {
                        return -1;
                    }
                    if (x > y) {
                        return 1;
                    }
                    return 0;
                }
            )
        }
            return (
                <>
                    {sortedList.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            )
        case "statusDescending": {
            sortedList.sort((a, b) => {
                    let x = a.status.toLowerCase();
                    let y = b.status.toLowerCase();
                    if (y < x) {
                        return -1;
                    }
                    if (y > x) {
                        return 1;
                    }
                    return 0;
                }
            )
        }
            return (
                <>
                    {sortedList.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            )
        case "typeAscending": {
            sortedList.sort((a, b) => {
                    let x = a.type.toLowerCase();
                    let y = b.type.toLowerCase();
                    if (x < y) {
                        return -1;
                    }
                    if (x > y) {
                        return 1;
                    }
                    return 0;
                }
            )
        }
            return (
                <>
                    {sortedList.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            )
        case "typeDescending": {
            sortedList.sort((a, b) => {
                    let x = a.type.toLowerCase();
                    let y = b.type.toLowerCase();
                    if (y < x) {
                        return -1;
                    }
                    if (y > x) {
                        return 1;
                    }
                    return 0;
                }
            )
        }
            return (
                <>
                    {sortedList.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            )
        default:
            return (
                <>
                    {list.map((currentTicket) => (
                        <tr key={currentTicket.Id}>
                            <TicketItem ticketValue={currentTicket} />
                        </tr>
                    ))}
                </>
            );
    }

}

export default TicketList;