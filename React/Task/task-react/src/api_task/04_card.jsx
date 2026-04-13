import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Card_04() {

    const [card,setcard]= useState([])

    useEffect(()=>{
        apifetch()
    },[])
    const apifetch = async () => {
        const apidata = await axios.get("https://fakestoreapiserver.reactbd.org/api/products")
        console.log(apidata.data.data)
        setcard(apidata.data.data)
    }
    return (
        <div>
            <div className="container">
                <h1 className="text-center">API call in card</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        card && card.map((data, index) => {
                            console.log(data)
                            const { title, price, description, category, image,brand } = data
                            return (

                                <div className="col" key={index}>
                                    <div className="card h-100">
                                        <img src={image} className="card-img-top" style={{ height: "300px" }} alt="..." />
                                        <div className="card-body">
                                            <h5>{brand}</h5>
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text">{description.slice(0, 100)}...</p>
                                            <h6>{category}</h6>
                                            <h5>$ {price}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
