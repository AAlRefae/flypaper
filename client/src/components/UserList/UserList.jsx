import React from "react";
import UserItem from "../UserItem/UserItem";

const UserList = ({ list, sortType }) => {
    let sortedList = list;
    switch (sortType) {
        case "nameAscending": {
            sortedList.sort((a, b) => {
                    let x = a.firstName.toLowerCase();
                    let y = b.firstName.toLowerCase();
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
                    {sortedList.map((currentUser) => (
                        <tr key={currentUser.Id}>
                            <UserItem userValue={currentUser} />
                        </tr>
                    ))}
                </>
            )
        case "nameDescending": {
            sortedList.sort((a, b) => {
                    let x = a.firstName.toLowerCase();
                    let y = b.firstName.toLowerCase();
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
                    {sortedList.map((currentUser) => (
                        <tr key={currentUser.Id}>
                            <UserItem userValue={currentUser} />
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
                    {sortedList.map((currentUser) => (
                        <tr key={currentUser.Id}>
                            <UserItem userValue={currentUser} />
                        </tr>
                    ))}
                </>
            )
        }
        // case "createdDescending": {
        //     sortedList.sort((a, b) => {
        //             return new Date(b.createdOn) - new Date(a.createdOn)
        //         }
        //     )
        //     return (
        //         <>
        //             {sortedList.map((currentProject) => (
        //                 <tr key={currentProject.Id}>
        //                     <ProjectItem userValue={currentProject} />
        //                 </tr>
        //             ))}
        //         </>
        //     )
        // }
        // case "updatedAscending": {
        //     sortedList.sort((a, b) => {
        //             return new Date(a.updatedAt) - new Date(b.updatedAt)
        //         }
        //     )
        //     return (
        //         <>
        //             {sortedList.map((currentProject) => (
        //                 <tr key={currentProject.Id}>
        //                     <ProjectItem userValue={currentProject} />
        //                 </tr>
        //             ))}
        //         </>
        //     )
        // }
        // case "updatedDescending": {
        //     sortedList.sort((a, b) => {
        //             return new Date(b.updatedAt) - new Date(a.updatedAt)
        //         }
        //     )
        //     return (
        //         <>
        //             {sortedList.map((currentProject) => (
        //                 <tr key={currentProject.Id}>
        //                     <ProjectItem userValue={currentProject} />
        //                 </tr>
        //             ))}
        //         </>
        //     )
        // }
        //
        // case "typeAscending": {
        //     sortedList.sort((a, b) => {
        //             let x = a.type.toLowerCase();
        //             let y = b.type.toLowerCase();
        //             if (x < y) {
        //                 return -1;
        //             }
        //             if (x > y) {
        //                 return 1;
        //             }
        //             return 0;
        //         }
        //     )
        // }
        //     return (
        //         <>
        //             {sortedList.map((currentProject) => (
        //                 <tr key={currentProject.Id}>
        //                     <ProjectItem userValue={currentProject} />
        //                 </tr>
        //             ))}
        //         </>
        //     )
        // case "typeDescending": {
        //     sortedList.sort((a, b) => {
        //             let x = a.type.toLowerCase();
        //             let y = b.type.toLowerCase();
        //             if (y < x) {
        //                 return -1;
        //             }
        //             if (y > x) {
        //                 return 1;
        //             }
        //             return 0;
        //         }
        //     )
        // }
        //     return (
        //         <>
        //             {sortedList.map((currentProject) => (
        //                 <tr key={currentProject.Id}>
        //                     <ProjectItem userValue={currentProject} />
        //                 </tr>
        //             ))}
        //         </>
        //     )
        default:
            return (
                <>
                    {list.map((currentUser) => (
                        <tr key={currentUser.Id}>
                            <UserItem userValue={currentUser} />
                        </tr>
                    ))}
                </>
            )
    }
}

export default UserList;