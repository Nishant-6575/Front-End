import React from 'react'

function Props({home,aboutus,contactus}) {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Select Option Below</h1>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 50 }}>
          <button className="btn btn-primary">{home}</button>
          <button className="btn btn-primary">{aboutus}</button>
          <button className="btn btn-primary">{contactus}</button>
        </div>
        <div style={{ marginTop: 50, backgroundColor: 'rgb(197, 230, 247)' }}>
          <h2 style={{ padding: 10, textAlign: 'center' }}>hello</h2>
        </div>
</div>

    </div>
  )
}

export default Props
