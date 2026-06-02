import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodo, DeleteTodo } from '../Slice/TodoSlice'
import Header from '../../Header'

export default function Todo() {

    const [task, settask] = useState("")

    const { todos } = useSelector((state) => state.todo)

    const dispatch = useDispatch()

    const getsubmit = (e) => {
        e.preventDefault()
        dispatch(AddTodo(task))
        settask("")
    }
    return (
        <div>
            <Header/>
            <div className='mx-auto m-5'>
                <h1 className='text-center'>Please Enter Your Task</h1>
                <form action="" className='text-center' onSubmit={getsubmit}>
                    <input type="text" value={task} onChange={(e) => settask(e.target.value)} placeholder='Enter Your Task' />
                    <button className='mx-2 btn btn-primary'>Add Data</button>
                </form>
                <div className='d-flex justify-content-center my-4'>
                    <ul>
                        {
                            todos && todos.map((data, index) => {
                                return (
                                    <li className='my-2' key={index} style={{ fontSize: "25px" }}>{data}
                                        <button onClick={() => dispatch(DeleteTodo(index))} className='mx-2 btn btn-danger'>Delete</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}
