import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  // function to change the color , can also directly use setcolor()
  let changeColor = (color) => setColor(color);
  return (
    <>

      <h1 className='text-red-300 text-2xl text-center h-20 flex items-center justify-center' >Vite + React</h1>

      <h2 className='bg-violet-700 text-white text-3xl text-center h-48 flex items-center justify-center'>
        bg changer app with tailwindcss
      </h2>


      <div className='w-full h-screen duration-200 bg-black' style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg
           bg-amber-300 px-3 py-2 rounded-3xl">

            {/*button one - */}
            <button
              onClick={() =>
                changeColor("green")
              }

              className='bg-green-600 outline-none px-4 py-1 shadow-lg rounded-full'>green </button>

            {/* button - two */}
            <button
              onClick={() =>
                changeColor("fuchsia")
              }
              className='bg-fuchsia-700 outline-none px-4 py-1 shadow-lg rounded-full'>fuchsia  </button>

            <button
              onClick={() =>
                changeColor("oklch(0.715 0.143 215.221)")
              }

              className='bg-cyan-500 outline-none px-4 py-1 shadow-lg rounded-full'> cyan </button>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
