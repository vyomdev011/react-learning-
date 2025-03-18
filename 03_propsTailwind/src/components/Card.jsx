import React from 'react';
// name , album are keys of props (properties)

function Card({name = "vishal",album = "jest",count }) {
   
  return (
    <div>

      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">

        <div>
          <img className="size-48 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
        </div>

        <div className="flex flex-col items-start space-y-2">
          <span className="text-3xl font-medium">Name : {name}</span>
          <span className="text-700 font-medium">Class : Warfare</span>
          <span className="text-600 font-medium">Album name : {album}</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. {count}</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>


      </div>

    </div>
  )
}



export default Card
