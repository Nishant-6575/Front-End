import React from 'react'

export default function UseCard({name,age,location}) {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h4 className="card-title">Name: {name}</h4>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Age: {age}</li>
                    <li className="list-group-item">Location: {location}</li>
                </ul>
            </div>
        </div>
    )
}