import React from 'react'
import axios from "axios"
import { useState } from "react";


const LinkShort = () => {

    const [link, setLink] = useState('Your Link will be here!')
    const [url, setUrl] = useState('')
    const [clicked, setClicked] = useState(false);

  

    const apiCall = async ()=>{
      try{
        if(url === ""){
          alert("please Fill the Url Input")
          setLink('Your Link will be here!')
          return;
        }
      const response = await axios.get(`https://is.gd/create.php?format=json&url=${url}`)
      console.log(response)
      setLink(response.data.shorturl)
      
  
      }
      catch(e){
           console.log("error: ", e.message)
           
      }
    }



return (
       <div className="  h-full w-full flex flex-col items-center justify-center gap-16 absolute inset-0 -z-10   [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
   
       <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold text-white">Link Shortner</h1>


       <div className=" w-[90%] md:w-[60%] lg:w-[60%] border-2 border-gray-800 rounded-2xl backdrop-blur-2xl gap-4 px-1 py-6 flex  items-center flex-col">
        
         <h1 className=" text-xl md:text-3xl lg:text-3xl text-white font-bold">Paste the URL to be shortened</h1>

         <div className=" w-[90%] md:w-[90%] lg:w-3/4 p-2 flex items-center justify-center">
             <input onChange={(e)=>{setUrl(e.target.value)}} className=" text-black w-[70%] text-xl px-2 py-2 bg-white rounded-l-md" type="text" name="" id="" />

             <button onClick={()=>{apiCall(), setClicked(false)}} className=" text-xl px-6 py-2 bg-red-500 text-white rounded-r-md"> Click</button>
         
         </div>

         <div className=" text-white flex items-center justify-center p-2 gap-4">
            <h3>{link}</h3>
            <span onClick={()=> [navigator.clipboard.writeText(link), setClicked(true)]} className=" px-4 py-1 bg-gray-600 text-white text-xl font-bold cursor-pointer rounded-md">{clicked ? "Copied" : "Copy"}</span>
         </div>

      </div>


    </div>
  )
}

export default LinkShort
