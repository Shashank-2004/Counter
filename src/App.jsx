import React from 'react'
import { useState, useEffect } from "react";

const App = () => {

  const [counter, setCounter] = useState(() => {
    const saved = localStorage.getItem("counter");
    return saved !== null ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  //let counter=0
  const addValue=()=>{
    setCounter(counter+1)
  }

  const removeValue=()=>{
    setCounter(0)
  }

  return (
    <div>
      <div className='text-center bg-sky-400
       justify-center items-center h-108 w-80 ml-150 mt-40 rounded-3xl'>
        <h1 className='mb-4 pt-4 text-3xl text-white'>COUNTER</h1>
        <img src='https://i.pinimg.com/736x/6b/24/fc/6b24fc9012ca3b6debc5892a33335d9b.jpg' className='h-50 ml-22.5 w-35'/>
        <h2 className='text-2xl mt-2 mb-4 text-white'>Value : {counter}</h2>
        <button onClick={addValue} className='bg-black text-white w-35 p-1 rounded-2xl text-xl'>Count</button>
        <br/>
        <button onClick={removeValue} className='bg-red-500 text-white w-35 p-1 mt-2 rounded-2xl text-xl'>Reset</button>
      </div>
    </div>
  )
}

export default App
