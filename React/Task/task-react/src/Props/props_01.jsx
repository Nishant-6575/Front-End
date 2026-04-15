
import React from 'react'

export default function Parent() {
  return <Child name="Alex" age={25} />;
}

function Child(props) {
  return (
    <div>
        <h1>This is {props.name}</h1>
        <h1>hello this is </h1>

    </div>
  )
}