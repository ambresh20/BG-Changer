import React, { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState("olive") ;

  return (
    <div className="w-full h-screen duration-200" style={ {backgroundColor:color} }>

      <h1 className='font-bold text-2xl text-center uppercase text-green cursor-wait pt-5'>BG Color Changers</h1>

      <div className='flex flex-wrap justify-center fixed bottom-12 px-2 inset-x-0  '>

        <div className="flex flex-wrap justify-center gap-3 shadow-2xl px-3 py-2 rounded-3xl bg-white ">

          <button  
          onClick={ () => setColor("red")}
          className='bg-red-500 outline-none px-4 py-1 rounded-full ' > Red </button>

          <button  
          onClick={ () => setColor("green")}
          className='bg-green-500 outline-none px-4 py-1 rounded-full' > Green </button>

          <button  
          onClick={() => setColor("yellow")}
          className='bg-yellow-500 outline-none px-4 py-1 rounded-full' > Yellow </button>

          <button 
          onClick={() => setColor("black")}
          className='bg-neutral-900 outline-none px-4 py-1 rounded-full text-white'> Black </button>

          <button 
          onClick={() => setColor("white")}
          className='bg-neutral-200 outline-none px-4 py-1 rounded-full'> white </button>

          <button 
          onClick={() => setColor("blue")}
          className='bg-blue-500 outline-none px-4 py-1 rounded-full'> Blue </button>

          <button 
          onClick={() => setColor("#00FFFF")}
          className='bg-[#00FFFF] outline-none px-4 py-1 rounded-full'> Aqua </button>

          <button 
          onClick={() => setColor("orange")}
          className='bg-orange-500 outline-none px-4 py-1 rounded-full' > Orange </button>

          <button 
          onClick={() => setColor("#800080")}
          className='bg-[#800080] outline-none px-4 py-1 rounded-full'> Purple </button>
          
          <button 
          onClick={() => setColor("pink")}
          className='bg-pink-500 outline-none px-4 py-1 rounded-full'> Pink </button>

          <button 
          onClick={() => setColor("#000080")}
          className='bg-[#000080] outline-none px-4 py-1 rounded-full text-white'> Navi </button>

          <button 
          onClick={() => setColor("gray")}
          className='bg-gray-500 outline-none px-4 py-1 rounded-full'> Gray </button>

          <button
          onClick={() => setColor("#008080")} 
          className='bg-[#008080] outline-none px-4 py-1 rounded-full'>Teal</button>

          <button
          onClick={() => setColor("#00FF00")} 
          className='bg-[#00FF00] outline-none px-4 py-1 rounded-full'>Lime</button>

          <button
          onClick={() => setColor("#800000")} 
          className='bg-[#800000] outline-none px-4 py-1 rounded-full'>Maroon</button>

          <button
          onClick={() => setColor("#C0C0C0")} 
          className='bg-[#C0C0C0] outline-none px-4 py-1 rounded-full'>Silver</button>

        </div>

      </div>

    </div>
  );
}

export default App;
