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
      <div className='flex mb-4 justify-center'>
        <h1 className='pt-4 text-3xl ml-20 text-white'>COUNTER</h1>
        <button onClick={removeValue} className='bg-red-500 text-white p-1 ml-10 w-10 h-10 rounded-full text-xl transition duration-150 ease-in-out 
             active:scale-95 active:bg-red-700'>R</button>
      </div>
        <img src='https://i.pinimg.com/736x/6b/24/fc/6b24fc9012ca3b6debc5892a33335d9b.jpg' className='w-40 sm:w-48 md:w-56 mx-auto rounded-lg'/>
        <h2 className='text-2xl mt-2 mb-4 text-white'>Value : {counter}</h2>
        <button 
            onClick={addValue} 
            className="bg-purple-500 text-white w-full py-2 rounded-2xl text-xl 
             transition duration-150 ease-in-out 
             active:scale-95 active:bg-purple-700"
            >
  COUNT
</button>
      </div>
    </div>
  )
}

export default App
