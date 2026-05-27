import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function useRegEdit(api, redirect) {
    const [input, setinput] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        repassword: "",
        status: ""
    })

    const redir = useNavigate()

    const getchange = (e) => {
        setinput({
            ...input,
            id: new Date().getTime().toString(),
            status: "unblock",
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = async (e) => {
        e.preventDefault()

        try {

            const { name, email, password } = input

            const { repassword, ...userdata } = input

            if (name == "" || email == "" || password == "" || repassword == "") {
                console.log("All fields are required!")
                toast.error("All fields are required!")
                return false
            }

            const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            if (!emailpattern.test(input.email)) {
                console.log("Please enter valid email!")
                toast.error("Please enter valid email!")
                return false
            }

            const emailres = await axios.get(`${api}?email=${input.email}`)

            if (emailres.data.length == 1) {
                console.log("email already registered!")
                toast.error("email already registered!")
                return false
            }

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if (!passwordRegex.test(input.password)) {
                console.log("Please enter valid password!")
                toast.error("Please enter valid password!")
                return false
            }

            if (password != repassword) {
                console.log("Password does not match")
                toast.error("Password does not match")
                return false
            }

            const res = await axios.post(api, userdata)

            toast.success("User created sucessfully!")
            redir(redirect)
        } catch (error) {
            console.log("API not found")
            toast.error("API not found")
        }
    }
    return { getchange, getsubmit }
}
