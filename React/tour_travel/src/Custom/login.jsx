import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function useLogin(api, redirect, input) {

    const redir = useNavigate()

    const [form, setform] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        if (input == "admin") {
            if (localStorage.getItem("Aid")) {
                redir(redirect)
            }
        } else if (input == "user") {
            if (localStorage.getItem("Uid")) {
                redir(redirect)
            }
        }
    }, [])

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = async (e) => {
        e.preventDefault();

        try {
            const { email, password } = form

            if (email == "" || password == "") {
                console.log("Email and password required!")
                toast.error("Email and password required!")
                return false
            }

            const res = await axios.get(`${api}?email=${email}`)

            // Check Email
            if (res.data.length === 0) {
                console.log("Email not found")
                toast.error("Email is not Registered")
                setform({
                    ...form,
                    password: ""
                })
                return false
            }

            const logindata = res.data[0]

            // Check Password
            if (logindata.password != password) {
                console.log("Password is incoreect")
                toast.error("Password is incoreect")
                setform({
                    ...form,
                    password: ""
                })
                return false
            }

            if (input == "admin") {
                toast.success("Admin login Successfully")
                localStorage.setItem("Aid", logindata.id)
                localStorage.setItem("Aname", logindata.name)
            } else if (input == "user") {
                if (logindata.status == "block") {
                    toast.error("User Blocked")
                    return false
                } else {
                    toast.success("User login Successfully")
                    localStorage.setItem("Uid", logindata.id)
                    localStorage.setItem("Uname", logindata.name)
                }

            } else {
                return false
            }

            redir(redirect)

        } catch (error) {
            console.log("API not found", error)
            toast.error("API not found")
        }
    }

    return { getchange, getsubmit, form }
}
