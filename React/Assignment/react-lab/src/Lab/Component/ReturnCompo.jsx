import React from 'react'
import Greeting from './Greeting'
import WelcomeMessage from './WelcomeMessage'

export default function ReturnCompo() {
    return (
        <div>
            <h1>Here Function Component Called</h1>
            <Greeting name="Nishant" />

            <h1>Here Class Component Called</h1>
            <WelcomeMessage />

        </div>
    )
}

