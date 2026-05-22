import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddinList } from './todoSlice'


export default function TodoAdd() {
    const [name,setname]=useState("")

    // console.log(name)

    const dispatch = useDispatch()

    const getsumbit =(e)=>{
        e.preventDefault()

        dispatch(AddinList(name))

        setname("")
    }

  return (
    <div>
        <h1>Add data in To Do list</h1>
        <form action="" onSubmit={getsumbit}>
            <input value={name} type="text" onChange={(e)=>{setname(e.target.value)}}/>
            <button>Add</button>
        </form>
    </div>
  )
}
