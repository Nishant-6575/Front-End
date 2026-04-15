import React, { useState } from 'react'

export default function To_do() {
    const [inp, setinp] = useState({
        name: "",
        surname: ""
    })

    const [listinp, setlistinp] = useState([])
    const [errordata, seterrordata] = useState("")
    const [listindex, setlistindex] = useState(null)

    console.log(listindex)

    function updateinp() {
        if (inp.name.trim() == "") {
            console.error("Empty input box error");
            seterrordata("Please fill input box to add your name")
            setlistindex(null)
            return
        }
        if (listindex != null) {
            // console.log("index is here")

            listinp[listindex] = inp.name
            setlistinp([
                ...listinp
            ])
            setinp({ name: "" })
            setlistindex(null)

            // console.log(listinp)

        } else {
            setlistinp([...listinp, inp.name])
            setinp({ name: "" })
        }


    }

    const updatetext = (e) => {
        setinp({
            ...inp,
            [e.target.name]: e.target.value
        })
        seterrordata("")
    }

    function deleteindex(index) {
        setlistinp(listinp.filter((_, i) => i !== index))
    }

    function update(index) {
        // console.log(index)
        // console.log(listinp[index])
        setlistindex(index)
        setinp({
            ...setinp,
            name: listinp[index]
        })
    }

    return (
        <div>
            <div className='container m-5'>
            <h1>Add your name here</h1>
            <input type="text" value={inp.name} name='name' onChange={updatetext} />
            <button className='btn btn-primary ms-5' onClick={updateinp}>Add/Update</button>
            {errordata && <h5 className='text-danger'>{errordata}</h5>}
            </div>
            <div className='container'>
                <table className="table table-borderless" style={{maxWidth:500}}>
                    <tbody>
                        {
                            listinp.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data}</td>
                                        <td><button className='btn btn-danger ms-3' onClick={() => { deleteindex(index) }}>Delete</button></td>
                                        <td><button className='btn btn-success ms-3' onClick={() => { update(index) }} >Edit</button></td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}
