import { useState } from "react";


function App() {
  const [color, setBgColor] =  useState('white')


  return (
    <>
      <div
        className="bg-white w-full h-screen border-2"
        style={{backgroundColor: color}}
      >
        <div className="w-full bg-white rounde flex justify-center items-center">
          <div className=" m-2 inline-block">
          <button className=" bg-yellow-300 text-white outline-none rounded-lg px-3 py-3"
            onClick={()=> setBgColor('yellow')}
          >
              yellow
            </button>
          </div>
          <div className=" m-2 inline-block">
            <button className=" bg-green-600 text-white outline-none rounded-lg px-3 py-3"
             onClick={()=> setBgColor('green')}
          >
              Green
            </button>
          </div>
          <div className=" m-2 inline-block">
            <button className=" bg-blue-600 text-white outline-none rounded-lg px-3 py-3"
             onClick={()=> setBgColor('blue')}
          >
              Blue
            </button>
          </div>
          <div className=" m-2 inline-block">
            <button className=" bg-orange-600 text-white outline-none rounded-lg px-3 py-3"
             onClick={()=> setBgColor('orange')}
          >
              orange
            </button>
          </div>
          <div className=" m-2 inline-block">
          
            <button
              className=" bg-red-600 text-white outline-none rounded-lg px-3 py-3"
              onClick={()=> setBgColor('red')}
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
