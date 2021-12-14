import React, { useState } from 'react'

const ChangeBG = () => {
  let red = 'red'
  const [bg, setBg] = useState(red)

  const bgChange = () => {
    let newColor = 'yellow'
    setBg((bg) => (bg === red ? newColor : red))
  }

  return (
    <>
      <div className='bg' style={{ backgroundColor: bg }}>
        <h2>Change color on click</h2>
        <button onClick={bgChange}>Click Me</button>
      </div>
    </>
  )
}

export default ChangeBG
