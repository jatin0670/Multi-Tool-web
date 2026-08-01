import React, { useEffect } from 'react'
import { useState } from 'react';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';


const QRcode = () => {


  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const [load, setLoad] = useState("Generate");



  return (
    <div className='  h-screen w-full flex flex-col items-center justify-center gap-12 bg-gradient-to-t from-indigo-900 to-gray-900 '>
      
      <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-6xl">QR Generator</h1>

      <div className=" w-[90%] md:w-[60%] lg:w-[60%] border-2 border-gray-800 rounded-2xl bg-white gap-4 px-1 
      py-6 flex  items-center flex-col shadow-md shadow-black ">
        
         <h1 className=" text-lg md:text-2xl lg:text-3xl text-gray-800 font-bold">Paste the URL</h1>

         <img src={qr} onLoad={()=>{setLoad("Generate")}}   />

         <div className=" w-[90%] md:w-[90%] lg:w-3/4 p-2 flex items-center justify-center ">
             <input onChange={(e)=>{setUrl(e.target.value)}}  className=" text-gray-800 w-[70%] text-xl px-2 py-2 bg-white rounded-md border border-text-gray-800" type="text" placeholder='Link or Text' />

             <button onClick={()=>{setQr(`https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=150x150`),setLoad("Generating...")}}  className=" text-xl px-3 py-2 bg-[#FF2A54] text-white rounded-md">{load}</button>
         
         </div>
      </div>

    </div>
  )
}

export default QRcode
