import React, { useState } from 'react'

export default function To_do() {
    const [inp, setinp] = useState({
        name: "",
        surname: ""
    })

    const [saveinp, setsaveinp] = useState([])
    const[errordata,seterrordata] = useState("")

    function updateinp() {
        if (inp.name.trim() === ""){
            console.error("Empty input box error");
            seterrordata("Please fill input box to add your name")
           return
        }
        setsaveinp([...saveinp, inp.name])
        setinp({name:""})

    }

    const updatetext = (e) => {
        setinp({
            ...inp,
            [e.target.name]: e.target.value
        })
        seterrordata("")
    }

    function deleteindex(index){
        setsaveinp(saveinp.filter((_,i)=> i !== index))
    }

    // deleteindex(2)
    console.log(saveinp[2])

    // console.log(inp)
    console.log(saveinp)

    return (
        <div>
            <h1>add your name</h1>
            <input type="text" value={inp.name} name='name' onChange={updatetext} />
            <button className='btn btn-primary ms-5' onClick={updateinp}>add</button>
            {errordata && <h5 className='text-danger'>{errordata}</h5>}
            {/* <button className='btn btn-primary ms-5' onClick={deleteindex}>add</button> */}
            <div>
                <h1>Here is input saved:</h1>
                {
                    saveinp.map((data, index) => {
                        return (
                            <div key={index} className='d-flex m-2'>
                                <h4>{data}</h4>
                                <button className='btn btn-secondary ms-3' onClick={()=>{deleteindex(index)}}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
