import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button className="bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 cursor-pointer 
            hover:bg-opacity-90 hover:scale-105 hover:shadow-lg 
          active:bg-gray-700 active:scale-95 transition-all duration-200 rounded-lg">
          ▶️Play
          </button>
          <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 cursor-pointer 
           hover:bg-opacity-90 hover:scale-105 hover:shadow-lg 
         active:bg-gray-700 active:scale-95 transition-all duration-200 rounded-lg">
          ℹ️More Info
          </button>

        </div>
    </div>
  )
}

export default VideoTitle