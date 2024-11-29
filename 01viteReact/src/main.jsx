import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



// _____ 1 _____

function MyApp(){
  return (
    <div>
      <h3>MyApp is a function!</h3>
    </div>
  )
}


// _____ 2 _____

const ReactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target: '_blank'
  },
  children: 'My defined Google'
}

//  _____ 3 ____

const anotherElement = (
  <a href="https://google.com" target='_blank'>another Visit</a>

)

//  _____ 4 ______
const reactElement = React.createElement(
  'a',
  {href : 'https://google.com',target: '_blank'},
  'Click me to visit Google'
)

// Printing / rendering  
//      |
//     \|/
//      V
 ReactDOM.createRoot(document.getElementById('root')).
render(

  //  <MyApp />
  // <ReactElement />
  // anotherElement
  reactElement 
 )
 