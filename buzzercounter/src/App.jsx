
import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState('');
  const [buzzer, setBuzzer] = useState([]);
  const [colors, setColors] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const handleBuzzer = (e) => {
    e.preventDefault();
    let buzzer = [];
    let colors = [];
    for (let i = 0; i < counter; i++) {
      buzzer.push(i);
      colors.push('red');
    }
    setBuzzer(buzzer);
    setColors(colors);
  };
  const handlePush = (index) => {
    console.log(index)
    let updatedColors = [...colors];
    updatedColors[index] = 'green';
    setColors(updatedColors);
    setDisabled(true)
  };
  const handleReset = () => {
    setBuzzer([]);
  }
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      <div> 
        <h1 className=' text-3xl font-semibold my-20'>Buzzer Counter</h1>
        </div>
      <form>
        <input
          className='border-2 border-zinc-700 rounded-md w-96 py-2'
          type="text"
          value={counter}
          onChange={(e) => setCounter(e.target.value)}
        />
        <button
          className='mx-3 px-4 py-2 bg-green-200 rounded-xl'
          type="submit"
          onClick={handleBuzzer}
        >
          Send
        </button>
         <button
          className='mx-2 px-4 py-2 bg-red-200 rounded-xl'
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
      <div className='my-10'>
        {buzzer.map((index, count) => (
          <button
            key={index}
            className={`mx-2 bg-${colors[index]}-200  h-24 rounded-full w-36`}
            disabled={disabled}
          >
            <span
              className={`text-lg`}
              onClick={() => {
                handlePush(index);
              }}
            >
              Horn {count+1}
            </span>
          </button>
        ))}
      </div>
    </div>
    </>
  );
};
export default App;
