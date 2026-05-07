import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useApi(apilink) {
    const [api,setapi] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata =async()=>{
        const res = await axios.get(apilink)
        setapi(res.data)
    }

    return {api,fetchdata}
}