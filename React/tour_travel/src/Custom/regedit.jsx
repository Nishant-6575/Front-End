import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function useRegEdit(api,redirect) {
    const [input, setinput] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
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
    console.log(input)

    const getsubmit = async (e) => {
        e.preventDefault()

        try {

            const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            if (!emailpattern.test(input.email)) {
                console.log("Please enter valid email!")
                toast.error("Please enter valid email!")
                return false
            }

            const emailres = await axios.get(`${api}?email=${input.email}`)

            console.log(emailres.data)

            if (emailres.data.length == 1) {
                console.log("email already registered!")
                toast.error("email already registered!")
                return false
            }

            const res = await axios.post(api, input)
            
            toast.success("User created sucessfully!")
            redir(redirect)
        } catch (error) {
            console.log("API not found")
            toast.error("API not found")
        }
    }
    return { input, getchange, getsubmit }
}
