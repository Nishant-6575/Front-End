import React, { useRef, useState } from 'react'

export default function Rerender() {

    const countRef = useRef(0)

    const [renderCount, setRenderCount] = useState(0)

    console.log("Component Re-rendered")

    const increaseRefValue = () => {
        countRef.current += 1

        console.log("Ref Value:", countRef.current)
    }

    const reRenderComponent = () => {
        setRenderCount(renderCount + 1)
    }

    return (
        <div>
            <div className='text-center mt-5'>
                <h1>useRef Example</h1>

                <h2>Ref Value: {countRef.current}</h2>

                <h2>Render Count: {renderCount}</h2>

                <button onClick={increaseRefValue} className='mx-2 btn btn-dark'> Increase Ref Value </button>

                <button onClick={reRenderComponent} className='btn mx-2 btn-success'> Re-render Component </button>
            </div>
        </div>
    )
}
