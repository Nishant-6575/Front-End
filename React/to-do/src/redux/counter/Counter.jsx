import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

export default function Counter() {
    const { value } = useSelector((state) => state.count)
    // console.log(value)

    const dispatch = useDispatch()
  return (
    <div>
        <h1>Hello this Counter App</h1>
        <h1>Counter : {value}</h1>

        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}
