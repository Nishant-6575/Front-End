import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './TaskSlice'

export default function ReduxTask() {

    const value = useSelector((state)=>state.task.value)

    const dispatch = useDispatch()
    return (
    <div>
        <h1>Here is useSelector and useDispatch Task</h1>
        <h1>{value}</h1>

        <button onClick={()=>{dispatch(increment())}} className='btn btn-success m-4'>Increment</button>

    </div>
  )
}
