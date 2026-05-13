import React from 'react'
// import LinkShort from './Components/LinkShort'
// import ImgComp from './Components/ImgComp'
import ToolCards from './ToolCards'

const Home = () => {



  return (
    <div className=' h-screen w-screen py-6 gap-16 flex flex-col items-center justify-center absolute inset-0  bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]'>

         {/* <LinkShort/>  */}
         {/* <ImgComp/> */}
         <h1 className='text-gray-400 hover:text-gray-800 cursor-pointer transition duration-300 ease-in-out text-xl md:text-4xl lg:text-6xl font-bold '>All tools in one place</h1>
         <div className=' w-[70%] md:w-[90%] lg:w-[90%] items-center justify-center flex flex-wrap gap-10 backdrop-blur-md rounded-lg border-2 border-gray-800 py-5 shadow-md shadow-black'>
         <ToolCards  to="/link-shortener" title={"Link Shortener"} dis={"it's a free tool to shorten URLs and generate short links"}/>
         <ToolCards to="/img-compression" title={"Img Compression"} dis={"Compress JPG, PNG, SVG or GIF with the best quality and compression."}/>
        
         </div>





    </div>
  )
}

export default Home
