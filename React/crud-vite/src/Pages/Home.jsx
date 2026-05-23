import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRead } from '../slice/Userslice'

export default function Home() {
    const { userData, loading } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userRead())
    }, [])
    // console.log(userData)

    return (
        <div>
            <div style={{ width: "80%", marginTop: 100, marginInline: "auto" }}>

                <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                    <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 p-4">
                        <div>
                            <div className="inline-flex text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                                User Data is Here
                            </div>
                        </div>
                        <label htmlFor="input-group-1" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                            </div>
                            <input type="text" id="input-group-1" className="block w-full max-w-96 ps-9 pe-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" />
                        </div>
                    </div>
                    <table className="w-full text-sm text-center rtl:text-right text-body">
                        <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Sr No
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData && userData.map((data, index) => {
                                    return (
                                        <tr key={index} className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                                            <td className="px-6 py-4">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 text-base font-semibold text-heading">
                                                {data.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {/* Modal toggle */}
                                                <button href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-fg-brand hover:underline">Edit user</button>
                                                <button href="#" className="font-medium text-danger hover:underline ms-3">Remove User</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    {/* Main modal */}
                    <div id="editUserModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative p-4 w-full max-w-md max-h-full">
                            {/* Modal content */}
                            <div className="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
                                {/* Modal header */}
                                <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                                    <h3 className="text-lg font-medium text-heading">
                                        Update User
                                    </h3>
                                    <button type="button" className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="editUserModal">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {/* Modal body */}
                                <form action="#">
                                    <div className="grid gap-4 grid-cols-2 py-4 md:py-6">
                                        <div className="col-span-2">
                                            <label htmlFor="name" className="block mb-2.5 text-sm font-medium text-heading">Name</label>
                                            <input type="text" name="name" id="name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Bonnie Green" required />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="position" className="block mb-2.5 text-sm font-medium text-heading">Email</label>
                                            <input type="text" name="position" id="position" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="email123@email.com" required />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4 border-t border-default pt-4 md:pt-6">
                                        <button type="submit" className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                            Update user
                                        </button>
                                        <button data-modal-hide="editUserModal" type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
