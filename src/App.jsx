import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LinkShort from './Components/LinkShort'    // ← add this
import ImgComp from './Components/ImgComp'   

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/link-shortener" element={<LinkShort />} />
        <Route path="/img-compression" element={<ImgComp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App




