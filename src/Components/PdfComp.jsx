import React from 'react'

const pdfComp = () => {
  return (
    <div className='  h-screen w-full flex flex-col items-center justify-center gap-12 bg-gradient-to-t from-indigo-900 to-gray-900 '>
      
      <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-6xl">QR Generator</h1>

      <div className=" w-[90%] md:w-[60%] lg:w-[60%] border-2 border-gray-800 rounded-2xl bg-white gap-4 px-1 
      py-6 flex  items-center flex-col shadow-md shadow-black ">
        
         <h1 className=" text-lg md:text-2xl lg:text-3xl text-gray-800 font-bold">Paste the URL</h1>

        
        
      </div>

    </div>
  )
}

export default pdfComp
