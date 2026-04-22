import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'


export default function Home() {
    return (
        <div>
            <Header />
            <h1>This is Home page</h1>
            <h1 class="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Footer />
        </div>
    )
}
