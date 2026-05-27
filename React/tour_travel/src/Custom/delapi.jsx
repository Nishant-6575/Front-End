import axios from 'axios'
import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { fireDb } from '../Firebase/firebase'
import { toast } from 'react-toastify'

export default function useDelApi(DbName, fetchdata) {

    const del = async (id) => {

        try {

            await deleteDoc(doc(fireDb, DbName, id))

            toast.success("Deleted Successfully")

            fetchdata()

        } catch (error) {

            console.log(error)
            toast.error("Data not deleted")
        }
    }

    return { del }
}
