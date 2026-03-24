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
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-gradient bg-[length:200%_200%]">

      <div className="bg-white/20 backdrop-blur-lg border border-white/30 text-center p-6 rounded-3xl w-[90%] max-w-sm shadow-xl">
        <h1 className='mb-4 pt-4 text-3xl text-white'>COUNTER</h1>
        <img src='https://i.pinimg.com/736x/6b/24/fc/6b24fc9012ca3b6debc5892a33335d9b.jpg' className='h-50 ml-24.5 w-35'/>
        <h2 className='text-2xl mt-2 mb-4 text-white'>Value : {counter}</h2>
        <button onClick={addValue} className='bg-black text-white w-35 p-1 rounded-2xl text-xl'>Count</button>
        <br/>
        <button onClick={removeValue} className='bg-red-500 text-white w-35 p-1 mt-2 rounded-2xl text-xl'>Reset</button>
      </div>
    </div>
  )
}

export default App
