import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectData, userData } from "../../assets/data/tempData";
import { RiArrowUpDownLine, RiSearchLine } from "react-icons/ri";
import UserList from "../../components/UserList/UserList";

const iconSize = "16";
const iconColour = "grey";

const Users = () => {
    let { projectId } = useParams();

    const checkUrlParams = () => {
        return projectId === undefined ? "" : projectId.slice(projectId.indexOf("-") + 1);
    }

    const [searchQuery, setSearchQuery] = useState("");
    const [SortType, setSortType] = useState("nameAscending");
    const [filteredUserList, setFilteredUserList] = useState(userData);
    const [filterProjectId, setFilterProjectId] = useState(checkUrlParams);
    const [filterRole, setFilterRole] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        let tempList = userData;
        if (searchQuery.length === 0) {
            setFilteredUserList(tempList);
        }

        if (filterProjectId.length !== 0) {
            tempList = tempList.filter(user => {
                return user.projectIds.includes(Number.parseInt(filterProjectId));
            })
        }

        if (filterRole.length !== 0) {
            tempList = tempList.filter(user => {
                return user.role.toLowerCase().trim().includes(filterRole.toLowerCase().trim());
            })
        }

        tempList = tempList.filter(user => {
            return (user.firstName.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
                    || user.lastName.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
                    || user.role.toLowerCase().trim().includes(searchQuery.toLowerCase().trim()))
                || user.username.toLowerCase().trim().includes(searchQuery.toLowerCase().trim());
        });

        setFilteredUserList(tempList);
    }, [searchQuery, filterProjectId, filterRole])

    // Update URL with state
    useEffect(() => {
        filterProjectId === "" ? navigate("", { replace: true }) : navigate(`pid-${filterProjectId}`, { replace: true })
    }, [filterProjectId])

    return (
        <>
            <div className="hidden sm:flex mx-auto">
                <div className="flex pt-3 pl-3 place-items-center">
                    <h1 className="text-xl mx-auto sm:text-3xl sm:m-0 sm:mr-auto my-auto text-gray-600">Users</h1>
                </div>

                <div className="hidden sm:flex items-center space-x-4 justify-end pt-3 pr-12 ml-auto">
                    <form className="hidden mb-0 lg:flex">
                        <div>
                            <select className="rounded-lg mr-3" value={filterRole} onChange={event => {
                                setFilterRole(event.target.value)
                            }}>
                                <option value="">Show All Roles</option>
                                <option value="Reporter">Reporter</option>
                                <option value="Agent">Agent</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="Administrator">Administrator</option>
                            </select>
                        </div>

                        <div>
                            <select className="rounded-lg mr-3" value={filterProjectId} onChange={event => {
                                setFilterProjectId(event.target.value)
                            }}>
                                <option value="">Show All Projects</option>
                                {projectData.map(value => {
                                    return (
                                        <option key={value.id} value={value.id}>{value.title}</option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="relative text">
                            <input
                                className="h-10 pr-10 text-sm placeholder-gray-400 border-gray-300 rounded-lg focus:z-10"
                                placeholder="Search..."
                                type="text"
                                onChange={event => setSearchQuery(event.target.value)}
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

            {filteredUserList.length === 0 ?
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
                                <div className="flex items-center"
                                     onClick={() => (setSortType(SortType === "nameAscending" ? "nameDescending" : "nameAscending"))}>
                                    Username
                                    <RiArrowUpDownLine size={iconSize} color={iconColour} />
                                </div>
                            </th>
                            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                <div className="flex items-center"
                                     onClick={() => (setSortType(SortType === "nameAscending" ? "nameDescending" : "nameAscending"))}>
                                    First Name
                                    <RiArrowUpDownLine size={iconSize} color={iconColour} />
                                </div>
                            </th>
                            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                <div className="flex items-center"
                                     onClick={() => (setSortType(SortType === "nameAscending" ? "nameDescending" : "nameAscending"))}>
                                    Last Name
                                    <RiArrowUpDownLine size={iconSize} color={iconColour} />
                                </div>
                            </th>
                            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                <div className="flex items-center"
                                     onClick={() => (setSortType(SortType === "nameAscending" ? "nameDescending" : "nameAscending"))}>
                                    Email
                                    <RiArrowUpDownLine size={iconSize} color={iconColour} />
                                </div>
                            </th>
                            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                <div className="flex items-center"
                                     onClick={() => (setSortType(SortType === "priorityAscending" ? "priorityDescending" : "priorityAscending"))}>
                                    Role
                                    <RiArrowUpDownLine size={iconSize} color={iconColour} />
                                </div>
                            </th>
                            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                <div className="flex items-center"
                                     onClick={() => (setSortType(SortType === "createdAscending" ? "createdDescending" : "createdAscending"))}>
                                    Created
                                    <RiArrowUpDownLine size={iconSize} color={iconColour} />
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                        <UserList list={filteredUserList} sortType={SortType} filterProjectId={filterProjectId} />
                        </tbody>
                    </table>
                </div>}
        </>)
}

export default Users;