import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function useLogout(input, redirect) {

    const redir = useNavigate()

    const logout = async (e) => {
        e.preventDefault();

        try {

            if (input == "admin") {
                toast.success("Admin logout Successfully")
                localStorage.removeItem("Aid")
                localStorage.removeItem("Aname")
                redir(redirect)

            } else if (input == "user") {
                redir(redirect)
                toast.success("User logout Successfully")
                localStorage.removeItem("Uid")
                localStorage.removeItem("Uname")
                redir(redirect)
            } else {
                return false
            }
        } catch (error) {
            console.log("API not found", error)
            toast.error("API not found")
        }
    }
    return { logout }
}
