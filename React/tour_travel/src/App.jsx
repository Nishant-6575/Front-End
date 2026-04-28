import React from 'react'
import Home from './website/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './website/pages/About'
import Blog from './website/pages/Blog'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App