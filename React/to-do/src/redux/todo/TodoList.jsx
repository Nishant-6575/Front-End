import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteList, EditList } from './todoSlice'

export default function TodoList() {
    const { todos } = useSelector((state) => state.todo)

    // console.log(todos)

    const dispatch = useDispatch()

    const [editname, seteditname] = useState("")

    const [editindex, seteditindex] = useState(null)

    const submit = (e) => {

        e.preventDefault()

        dispatch(EditList({
            index: editindex,
            value: editname
        }))

        seteditname("")

        seteditindex(null)

    }

    return (
        <div>
            <h1>This is To Do List</h1>
            <form action="" onSubmit={submit}>
                <input type="text" name='name' onChange={(e) => { seteditname(e.target.value) }} value={editname} />
                <button>Update Data</button>
            </form>
            {
                todos && todos.map((data, index) => {
                    return (
                        <div key={index}>
                            <h1>{data}
                                <button onClick={() => { seteditname(data); seteditindex(index) }}>Edit</button>
                                <button onClick={() => { dispatch(DeleteList(index)) }}>Delete</button>
                            </h1>
                        </div>
                    )
                })
            }
        </div>
    )
}
