import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LinkShort from './Components/LinkShort'    // ← add this
import ImgComp from './Components/ImgComp'   
import QRcode from './Components/QRcode'
import PdfComp from './Components/PdfComp'
import ImgConv from './Components/ImgConv'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/link-shortener" element={<LinkShort />} />
        <Route path="/img-compression" element={<ImgComp />} />
        <Route path="/QRcode" element={<QRcode/>}/>
        <Route path="/PdfComp" element={<PdfComp/>}/>
        <Route path="/ImgConv" element={<ImgConv/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App




