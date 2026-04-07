import React, { useState } from 'react'

function Props({ home, aboutus, contactus }) {
  const [text,settext]= useState("Result display")
  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Select Option Below</h1>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 50 }}>
          <button className="btn btn-primary" onClick={()=>settext(home)}>{home}</button>
          <button className="btn btn-primary" onClick={()=>settext(aboutus)}>{aboutus}</button>
          <button className="btn btn-primary" onClick={()=>settext(contactus)}>{contactus}</button>
        </div>
        <div style={{ marginTop: 50, backgroundColor: 'rgb(197, 230, 247)' }}>
          <h2 style={{ padding: 10, textAlign: 'center' }}>{text}</h2>
        </div>
      </div>

    </div>
  )
}

export default Props
