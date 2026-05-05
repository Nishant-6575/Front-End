import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function usePostApi(inp, link, redir) {
    const [input, setinput] = useState(inp)
    
    const redirect = useNavigate()

    const getchange = (e) => {
        setinput({
            ...input,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = async (e) => {

        e.preventDefault();

        try {
            const res = await axios.post(link, input)
            setinput(inp)
            redirect(redir)
        } catch (error) {
            console.log("APi data not Found", error)
        }
    }

    return { input, getchange, getsubmit }
}
