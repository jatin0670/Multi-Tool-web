import React, { useRef, useState } from 'react'
import {  RiUpload2Fill} from "@remixicon/react";
import imageCompression from "browser-image-compression";


const ImgComp = () => {
 
    const fileInputRef = useRef(null)
    const [FileName, setFileName] = useState('Click the button below to upload') // FOR UPLOADED FILE NAME
    const [File, setFile] = useState("") // UPLOADED FILE
   //  const [DownlaodFile, setDownloadFile] = useState('')
    const [DownloadURL, setDownloadURL] = useState('')  // URL FROM IMAGE COMPRESSION METHOD
    const [FileSize, setFileSize] = useState(100)
    
    const imageCompressFun = async ()=>{
      const compressed = await imageCompression(File, options)
      const url = URL.createObjectURL(compressed)
      setDownloadURL(url)
      console.log(url)

   }

   const options = {
      maxSizeKB: FileSize,
      maxWidthOrHeight: 1200,
      useWebWorker: true,
   }


  return (
    <div className="  h-full w-full flex flex-col items-center justify-center gap-12 absolute inset-0  bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] ">
   
       <h1 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-6xl">image compressor</h1>


       <div className=" w-[85%] md:w-[70%] lg:w-[60%] border-2 border-gray-800 rounded-2xl backdrop-blur-2xl gap-4 px-1 py-6 flex  items-center flex-col shadow-md shadow-black">
        
         <h1 className=" text-lg md:text-2xl lg:text-3xl text-gray-800 font-bold">Upload Image to be compressed</h1>

         <div className=" w-[90%] lg:w-[40%] p-2 flex flex-col gap-4 items-center justify-center ">

            <span className=' w-[90%] rounded-lg px-1 py-6 bg-white flex flex-col items-center justify-center gap-4 shadow-md shadow-black border-2 border-gray-800'>
            < RiUpload2Fill  />

            <p className=" text-xs md:text-sm lg:text-sm ">{FileName} <span onClick={()=>{setFile(''); setFileName('Click the button below to upload')}} className='p-2 bg-gray-400 rounded-full cursor-pointer ml-2'>X</span></p>

            {/* THIS IS JUST REF THING TO CLICK THE INPUT SECTION */}
            <button className='px-4 py-1 bg-blue-500 rounded-md text-white text-lg font-bold cursor-pointer' onClick={()=>{fileInputRef.current.click()}}>Browse file</button>

            {/* INPUT SECTION ADDS FILE NAME AND FILE ITSELF INTO [FILE AND FILENAME] */}
            <input  className="hidden" onChange={(e)=>{setFileName(e.target.files[0].name); setFile(e.target.files[0])}} ref={fileInputRef} type="file" accept="image/*" />
            
            </span>

            <div className=' border border-gray-400 p-3 rounded-lg flex flex-col items-center justify-center gap-2'>

            <span className=' text-xs md:text-lg text-white'> Selected compressed size "{FileSize}kb"</span>

            <div className=' = w-full flex items-center justify-center gap-5 flex-wrap'>
               <span onClick={()=>setFileSize(100)} className=' p-2 bg-gray-900 rounded-lg text-white cursor-pointer'>100kb</span>
               <span onClick={()=>setFileSize(200)} className=' p-2 bg-gray-900 rounded-lg text-white cursor-pointer'>200kb</span>
               <span onClick={()=>setFileSize(300)} className=' p-2 bg-gray-900 rounded-lg text-white cursor-pointer'>300kb</span>
               <span onClick={()=>setFileSize(700)} className=' p-2 bg-gray-900 rounded-lg text-white cursor-pointer'>700kb</span>
               <span onClick={()=>setFileSize(1000)} className=' p-2 bg-gray-900 rounded-lg text-white cursor-pointer'>1000kb</span>
               
            </div>

            </div>

            {/* THIS IS A FUNCTION THAT GIVES PROMISE */}
            
            <button onClick={()=>File != '' ? imageCompressFun() : alert("Please Upload Image File")} className=' px-4 py-1 bg-gray-600 rounded-md text-white text-xl font-bold cursor-pointer'>{DownloadURL == '' ? 'Upload' : 'Uploaded'}</button>
         
         </div>

         {DownloadURL == '' ? 
         <div className=" px-4 py-1 bg-gray-600 rounded-md text-white text-xl font-bold cursor-not-allowed">
            Download
         </div> 
         : 
         <a href={DownloadURL} download="compressed.jpg">
          <div onClick={()=>{setFile(''), setFileName('Click the button below to upload'), setDownloadURL('')}} className=" px-4 py-1 bg-gray-600 rounded-md text-white text-xl font-bold cursor-pointer">
            Download
         </div>  
         </a>}

      </div>


    </div>
  )
}


export default ImgComp
