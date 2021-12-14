import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// **********************************
// some other way to write same things
// ***********************************

// ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'))

// ReactDOM.render(
//   React.createElement('h1', null, 'Hello, world!'),
//   document.getElementById('root')
// )

// var h1 = document.createElement('h1')
// h1.innerHTML = 'hello sachin'
// document.getElementById('root').appendChild(h1)
