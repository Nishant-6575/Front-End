import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function useEdituser(api, redirect) {
    const redir = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("Uid")) {
            console.log("User not login")
            toast.error("User not login")
            redir("/userlogin")
            return
        }
        getdata()
    }, [])

    const id = localStorage.getItem("Uid")

    const [input, setinput] = useState({
        name: "",
        oldpassword: "",
        newpassword: "",
        repassword: ""
    })

    const [userdata, setuserdata] = useState()

    const getdata = async () => {
        const res = await axios.get(`${api}/${id}`)
        setuserdata(res.data)
        setinput({
            ...input,
            name: res.data.name
        })
    }

    const getchange = (e) => {
        setinput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = async (e) => {
        e.preventDefault()

        try {

            if (input.name == "") {
                toast.error("Name should not be empty")
                return
            }

            // old password check
            if (userdata.password !== input.oldpassword) {
                toast.error("Old password incorrect!")
                return
            }

            // new password match check
            if (input.newpassword !== input.repassword) {
                toast.error("New password does not match!")
                return
            }

            // password regex
            const passwordRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

            if (!passwordRegex.test(input.newpassword)) {
                toast.error("Please enter strong password!")
                return
            }

            const updateduser = {
                ...userdata,
                name: input.name,
                password: input.newpassword
            }

            const res = await axios.put(`${api}/${id}`, updateduser)

            localStorage.setItem("Uname", userdata.name)

            toast.success("Profile updated successfully!")

            redir(redirect)
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong!")
        }

    }


    return { input, getchange, getsubmit }
}
