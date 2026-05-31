import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fireDb } from '../Firebase/Firebase'

export default function useCrudApi(DbName, inp, redir) {

    // read api

    useEffect(() => {
        fetchdata()
    }, [DbName])


    const [getapi, setgetapi] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchdata = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await getDocs(
                collection(fireDb, DbName)
            );

            const alldata = res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setgetapi(alldata);
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    // add api
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

        const checkEmpty = Object.values(input).some(
            (value) => value == ""
        )
        if (checkEmpty) {
            toast.error("Please fill all field")
            return false
        }

        try {
            const res = await addDoc(collection(fireDb, DbName), input)

            setinput(inp)

            fetchdata()

            redirect(redir)

            toast.success("Package Added successfully")
        } catch (error) {
            console.log("API Not Found", error)
            toast.error("API not Found")
        }
    }

    // update api

    const [edit, setedit] = useState(inp)


    const getid = (data) => {
        setedit(data)
    }

    const getedit = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const UpdateApi = async (e) => {
        e.preventDefault()

        const checkEmpty = Object.values(edit).some(
            (value) => value == ""
        )

        if (checkEmpty) {
            toast.error("Please fill all field")
            return
        }

        try {

            const updateRef = doc(fireDb, DbName, edit.id)
            const res = await updateDoc(updateRef, { ...edit })

            fetchdata()

            toast.success("Data Updated successfully")

        } catch (error) {
            console.log("API not found", error)
            toast.error("Data not updated")
        }

    }

    // delete api
    const del = async (id) => {
        try {
            const res = await deleteDoc(doc(fireDb, DbName, id))

            fetchdata()
            toast.success("Record deleted successfully")

        } catch (error) {
            console.log("API not found", error)
            toast.error("API not found")
        }
    }
    return { getapi, input, getchange, getsubmit, edit, getid, getedit, UpdateApi, del }
}
