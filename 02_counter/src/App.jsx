import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 5;

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // with limit of max 20
    if(counter < 20){
    counter = counter + 1;
    setCounter(counter)
    console.log("clicked Add", counter)
    }
  } 
  const subtractValue = () => {
    //with limit of minimum 0
    if(counter > 0){
    counter = counter - 1;
    setCounter(counter)
    console.log("clicked Subtract", counter)
   }
}
  return (
    <>
    <div>
     <h3>Power and Adventure</h3>
     <h2>counter value: {counter}</h2>

     <button
     onClick={addValue}
     >ADD</button>
     <br />
     <button
     onClick= {subtractValue}
     >SUBTRACT</button>
    </div>
    </>
  )
}

export default App
