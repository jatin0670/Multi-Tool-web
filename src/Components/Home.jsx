import React from 'react'
// import LinkShort from './Components/LinkShort'
// import ImgComp from './Components/ImgComp'
import ToolCards from './ToolCards'

const Home = () => {



  return (
    <div className=' min-h-screen h-full w-full relative py-10 gap-16 flex flex-col items-center justify-center bg-[#F3F0E8] '>

      <h3 className=' absolute bottom-3 right-3 lg:text-xl md:text-sm text-xs font-extrabold'>More tools will be added soon</h3>

        {/* MAIN TEXT */}
         <h1 className='text-[#585346] cursor-pointer transition duration-300 ease-in-out text-xl md:text-4xl lg:text-7xl text-st font-bold '>All tools in one place</h1>

         {/* TOOLS DIV */}
         <div className=' w-[70%] md:w-[90%] lg:w-[90%] items-center justify-center flex flex-wrap gap-10 bg-[#585346] rounded-lg border border-gray-800 py-5 shadow-sm shadow-black'>

         <ToolCards  to="/link-shortener" title={"Link Shortener"} dis={"it's a free tool to shorten URLs and generate short links"}/>
         <ToolCards to="/img-compression" title={"Img Compression"} dis={"Compress JPG, PNG, SVG or GIF with the best quality and compression."}/>
         <ToolCards to="/QRcode" title={"QR Genetrator"} dis={"Its a free tool to generate QR Codes"}/>
        
         </div>





    </div>
  )
}

export default Home
