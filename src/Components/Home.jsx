import React from 'react'
// import LinkShort from './Components/LinkShort'
// import ImgComp from './Components/ImgComp'
import ToolCards from './ToolCards'

const Home = () => {



  return (
    <div className=' h-screen w-screen py-6 gap-16 flex flex-col items-center justify-center absolute inset-0 -z-10   [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>

         {/* <LinkShort/>  */}
         {/* <ImgComp/> */}
         <h1 className='text-white text-xl md:text-5xl lg:text-6xl font-bold '>All tools in one place</h1>
         <div className=' w-[70%] md:w-[90%] lg:w-[90%] items-center justify-center flex flex-wrap gap-10 backdrop-blur-2xl rounded-lg border-2 border-gray-800 py-5'>
         <ToolCards  to="/link-shortener" title={"Link Shortener"} dis={"it'sa free tool to shorten URLs and generate short links"}/>
         <ToolCards to="/img-compression" title={"Img Compression"} dis={"Compress JPG, PNG, SVG or GIF with the best quality and compression."}/>
        
         </div>





    </div>
  )
}

export default Home
