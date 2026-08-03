import React from 'react'
import axios from "axios"
import { useState } from "react";


const LinkShort = () => {

    const [link, setLink] = useState('Your Link will be here!')
    const [url, setUrl] = useState('')
    const [clicked, setClicked] = useState(false);
    const [load, setLoad] = useState(false)

    async function shortenUrl(originalUrl) {
      const response = await fetch("https://multi-tool-backend.onrender.com/short", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ original_url: originalUrl })
      });
    
      const data = await response.json();
      console.log(data);
      return data;
    }

  

    const apiCall = async ()=>{
      try{
        if(url === ""){
          alert("please Fill the Url Input")
          setLink('Your Link will be here!')
          return;
        }
        const data = await shortenUrl(url)
        console.log(data["short Code "])
        setLink(`https://multi-tool-backend.onrender.com/${data["short Code "]}`)
        setLoad(false)
        setClicked(false)
      
  
      }
      catch(e){
           console.log("error: ", e.message)
           
      }
    }



return (
       <div className="  h-screen w-full relative flex flex-col items-center justify-center gap-16 bg-gradient-to-t from-indigo-900 to-gray-900">
   
       <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold text-white">Link Shortner</h1>

       <div className=" w-[90%] md:w-[60%] lg:w-[60%] border-2 border-gray-800 rounded-2xl bg-white gap-4 px-1 py-6 flex  items-center flex-col shadow-md shadow-black ">
        
         <h1 className=" text-lg md:text-2xl lg:text-3xl text-gray-800 font-bold">Paste the URL to be shortened</h1>

         <div className=" w-[90%] md:w-[90%] lg:w-3/4 p-2 flex items-center justify-center ">
             <input  onChange={(e)=>{setUrl(e.target.value)}} className=" text-gray-800 w-[70%] text-xl px-2 py-2 bg-white rounded-md border border-text-gray-800" type="text" name="" id="" />

             <button  onClick={()=>{apiCall(), setClicked(false), setLoad(true)}} className=" text-xl px-6 py-2 bg-[#FF2A54] text-white rounded-md">{load ? "Loading..." : "click"}</button>
         
         </div>

         <div className=" text-white flex items-center justify-center p-2 gap-4">
            <h3 className='text-gray-800'>{link}</h3>
            <span onClick={()=> [navigator.clipboard.writeText(link), setClicked(true)]} className=" px-4 py-1 bg-gray-600 text-white text-xl font-bold cursor-pointer rounded-md">{clicked ? "copied" : "Copy"}</span>
         </div>

      </div>


    </div>
  )
}

export default LinkShort
