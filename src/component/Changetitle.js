import React, { useState, useEffect } from 'react'

function Changetitle() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `title ${count}`
  })
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default Changetitle
