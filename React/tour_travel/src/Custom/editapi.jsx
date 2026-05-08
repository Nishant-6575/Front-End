import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function UseEditApi(editdata, url, fetchdata) {
    const getid = async (id) => {
        const res = await axios.get(`${url}/${id}`)
        setedit(res.data)
    }

    const [edit, setedit] = useState({ editdata })

    const getedit = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const UpdateApi = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`${url}/${edit.id}`, edit)
            fetchdata()
            toast.success("Package Updated Successfully")
        } catch (error) {
            console.log("API Not Found", error)
        }
    }
    return { getid, edit, UpdateApi,getedit }
}
