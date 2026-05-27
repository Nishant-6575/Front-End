import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { fireDb } from '../Firebase/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

export default function useEditApi(editdata, DbName, fetchdata) {

    const [edit, setedit] = useState({ editdata })

    const getid = async (id) => {

        const docRef = doc(fireDb, DbName, id)

        const res = await getDoc(docRef)
        setedit({
            id: res.id,
            ...res.data()
        })
    }

    const getedit = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const UpdateApi = async (e) => {
        e.preventDefault();
        try {
            if (edit.days == "" || edit.desc == "" || edit.img == "" || edit.location == "" || edit.name == "" || edit.price == "") {
                console.log("pls Field a Package data")
                toast.error("pls Field a Package data")
                return false
            }

            const updateRef = doc(
                fireDb,
                DbName,
                edit.id
            )
            const res = await updateDoc(updateRef, {
                name: edit.name,
                location: edit.location,
                desc: edit.desc,
                days: edit.days,
                price: edit.price,
                img: edit.img
            })

            fetchdata()
            toast.success("Package Updated Successfully")
        } catch (error) {
            console.log("API Not Found", error)
        }
    }
    return { getid, edit, UpdateApi, getedit }
}
