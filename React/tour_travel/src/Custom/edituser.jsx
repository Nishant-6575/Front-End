import axios from 'axios'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fireDb } from '../Firebase/firebase'

export default function useEdituser(DbName, redirect) {

    const redir = useNavigate()

    const id = localStorage.getItem("Uid")

    useEffect(() => {
        if (!id) {
            console.log("User not login")
            toast.error("User not login")
            redir("/userlogin")
            return
        }
        getdata()
    }, [])

    const [input, setinput] = useState({
        name: "",
        oldpassword: "",
        newpassword: "",
        repassword: ""
    })

    const [userdata, setuserdata] = useState({})

    // get user data
    const getdata = async () => {

        try {

            const docRef = doc(fireDb, DbName, id)

            const res = await getDoc(docRef)

            if (res.exists()) {
                const data = {
                    id: res.id,
                    ...res.data()
                }
                setuserdata(data)

                setinput((prev) => ({
                    ...prev,
                    name: data.name
                }))
            }

        } catch (error) {
            console.log(error)
        }
    }

    // input change
    const getchange = (e) => {
        setinput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    // update
    const getsubmit = async (e) => {
        e.preventDefault()

        try {

            if (input.name === "") {
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

            const updateRef = doc(fireDb, DbName, id)

            const res = await updateDoc(updateRef, {
                name: input.name,
                password: input.newpassword
            })

            localStorage.setItem("Uname", input.name)

            toast.success("Profile updated successfully!")

            redir(redirect)

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong!")
        }

    }


    return { input, getchange, getsubmit }
}
