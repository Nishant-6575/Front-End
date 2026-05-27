import React from 'react'
import userdata from '../../../user.json'

import { fireDb } from '../../Firebase/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'



export default function UploadUsers() {

    const uploadusers = async () => {

        try {

            for (let item of userdata.tours) {

                await addDoc(collection(fireDb, "tours"), {
                    ...item,
                    timestamp: serverTimestamp()
                })
            }

            console.log("Users Uploaded Successfully")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

            <button onClick={uploadusers}>
                Upload Users
            </button>

        </div>
    )
}