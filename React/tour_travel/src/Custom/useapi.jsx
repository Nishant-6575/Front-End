import axios from 'axios'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { fireDb } from '../Firebase/firebase'

export default function useApi(DbName) {
    const [api, setapi] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await getDocs(collection(fireDb, DbName))

            const alldata = res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setapi(alldata)

        } catch (error) {
            console.log("Error", error)
        }
    }

    return { api, fetchdata }
}