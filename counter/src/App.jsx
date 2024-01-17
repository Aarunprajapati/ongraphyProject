import React, { useState } from 'react'
import './App.css'

 
const App = () => {
  const [count, setCount] = useState(0)

  const removeCounter = ()=>{
    if ( count > 0){
      setCount(count-1)
    }

  }
  const AddCounter = ()=>{
    if ( count<100){
      setCount(count+1)
    }

  }
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={AddCounter}>increment</button>
        <button onClick={removeCounter}>decrement</button>
      </div>
      
    </div>
  )
}

export default App
