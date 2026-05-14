import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function useRegEdit(api) {
    const [input, setinput] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    })

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
            const res = await axios.post(api, input)
            toast.success("User created sucessfully!")
        } catch (error) {
            console.log("API not found")
            toast.error("API not found")
        }
    }
    return { input, getchange, getsubmit }
}
