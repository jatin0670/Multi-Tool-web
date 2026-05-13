import React from 'react'
import { Link } from 'react-router-dom'  // ← missing import

const ToolCards = ({title, dis, to}) => {
  return (
    <div className=' p-2 h-44 w-[70%] md:h-52 md:w-64 lg:h-56 lg:w-72 rounded-lg flex flex-col items-center justify-around gap-1 border-2 border-gray-800 shadow-md shadow-black'>
      <h1 className='text-gray-800 text-lg md:text-2xl lg:text-3xl font-black'>{title}</h1>
      <p className=' text-gray-800 text-xs md:text-lg text-center'>{dis}</p>
      <Link to={to} target="_blank" rel="noreferrer">
      <button className=' px-5 py-1 md:px-6 md:py-2 lg:px-8 lg:py-2 bg-gray-500 text-white text-xl rounded-lg font-bold cursor-pointer'>ClicK</button>
      </Link>
    </div>
  )
}

export default ToolCards
