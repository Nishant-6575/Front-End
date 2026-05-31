import React from 'react'

export default function Map() {
    const fruits = ["Apple","Banana","Mango"]
  return (
    <div>
        <h1>This is map list</h1>
        <ul>
        {
            fruits && fruits.map((data,index)=>{
                return(
                    <li key={index}>
                        <h2>{data}</h2>
                    </li>
                )
            })
        }
        </ul>
    </div>
  )
}
