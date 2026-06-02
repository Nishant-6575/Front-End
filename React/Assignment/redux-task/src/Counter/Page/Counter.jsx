import React from 'react'
import Header from '../../Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from '../Slice/CounterSlice'


export default function Counter() {

  const { value } = useSelector((state) => state.count)

  const diapatch = useDispatch()

  return (
    <div>
      <Header />
      <h1>This is counter</h1>
      <div className='mx-auto text-center'>
        <h1>Counter : {value}</h1>

        <button onClick={() => { diapatch(increment()) }} className='btn btn-success m-2'>Increment</button>
        <button onClick={() => { diapatch(zero()) }} className='btn btn-primary m-2'>Zero</button>
        <button onClick={() => { diapatch(decrement()) }} className='btn btn-danger m-2'>Decrement</button>
      </div>
    </div>
  )
}
