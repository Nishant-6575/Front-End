import React from 'react'
import { useDispatch } from 'react-redux'
import { zero } from './counterSlice'

export default function CountZero() {
    const dispatch = useDispatch()
  return (
    <div>
        <h1>This is zero function</h1>
        <button onClick={()=>{dispatch(zero())}}>Zero</button>
    </div>
  )
}
