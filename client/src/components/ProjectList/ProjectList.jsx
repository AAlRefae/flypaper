import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectList = ({ list, sortType }) => {
    // TODO Extract string and date sort code for both project and ticket list into separate util module.
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
                    {sortedList.map((currentProject) => (
                        <tr key={currentProject.Id}>
                            <ProjectItem projectValue={currentProject} />
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
                    {sortedList.map((currentProject) => (
                        <tr key={currentProject.Id}>
                            <ProjectItem projectValue={currentProject} />
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
                    {sortedList.map((currentProject) => (
                        <tr key={currentProject.Id}>
                            <ProjectItem projectValue={currentProject} />
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
                    {sortedList.map((currentProject) => (
                        <tr key={currentProject.Id}>
                            <ProjectItem projectValue={currentProject} />
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
                    {sortedList.map((currentProject) => (
                        <tr key={currentProject.Id}>
                            <ProjectItem projectValue={currentProject} />
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
                    {sortedList.map((currentProject) => (
                        <tr key={currentProject.Id}>
                            <ProjectItem projectValue={currentProject} />
                        </tr>
                    ))}
                </>
            )
        }

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
                    {sortedList.map((currentProject) => (
                        <tr key={currentProject.Id}>
                            <ProjectItem projectValue={currentProject} />
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
                    {sortedList.map((currentProject) => (
                        <tr key={currentProject.Id}>
                            <ProjectItem projectValue={currentProject} />
                        </tr>
                    ))}
                </>
            )
        default:
            return (
                <>
                    {list.map((currentProject) => (
                        <tr key={currentProject.Id}>
                            <ProjectItem projectValue={currentProject} />
                        </tr>
                    ))}
                </>
            );
    }
}

export default ProjectList;