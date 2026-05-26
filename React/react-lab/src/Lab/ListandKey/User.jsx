import React from 'react'

export default function User() {
    const user = [
        {
            id: 456465,
            name: "user1"
        },
        {
            id: 123145,
            name: "user2"
        },
        {
            id: 798456,
            name: "user3"
        }
    ]
    return (
        <div>
            <h1>This is user data</h1>
            <table className='w-50 mx-auto border text-center'>
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index)=>{
                            return(
                                <tr key={index}>
                                    <td className='mx-3 py-1'>{index+1}</td>
                                    <td className='mx-3 py-1'>{data.id}</td>
                                    <td className='mx-3 py-1'>{data.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
