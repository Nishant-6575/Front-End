import axios from 'axios'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fireDb } from '../Firebase/firebase'

export default function usePostApi(inp, DbName, redir) {

    const [input, setinput] = useState(inp)

    const redirect = useNavigate()

    const getchange = (e) => {
        setinput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await addDoc(collection(fireDb, DbName), input)

            setinput(inp)

            redirect(redir)

        } catch (error) {
            console.log("APi data not Found", error)
        }
    }

    return { input, getchange, getsubmit }
}
