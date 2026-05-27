import axios from 'axios'
import React from 'react'

export default function useDelApi(url, fetchdata) {

    const del = async (id) => {

        try {
            const res = await axios.delete(`${url}/${id}`)
            fetchdata()
        } catch (error) {
            console.log("Api data not Found", error)
        }
    }
    return { del }
}
