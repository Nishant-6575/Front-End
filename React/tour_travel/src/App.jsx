import React from 'react'
import Home from './website/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './website/pages/About'
import Blog from './website/pages/Blog'
import BlogsData from './website/pages/BlogsData'
import Contact from './website/pages/Contact'
import Package from './website/pages/Package'
import PackageData from './website/pages/PackageData'
import Price from './website/pages/Price'
import Services from './website/pages/Services'
import NotFound from './website/pages/NotFound'
import Dashboard from './Admin/Apages/Dashboard'
import PackManage from './Admin/Apages/PackManage'
import ServiceManage from './Admin/Apages/ServiceManage'
import PackAdd from './Admin/Apages/PackAdd'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogdata' element={<BlogsData />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/package' element={<Package />} />
        <Route path='/packagedata' element={<PackageData />} />
        <Route path='/price' element={<Price />} />
        <Route path='/services' element={<Services />} />

        <Route path='*' element={<NotFound />} />

        {/* admin */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/packagemanage' element={<PackManage />} />
        <Route path='/sermanage' element={<ServiceManage />} />

        <Route path='/packadd' element={<PackAdd />} />


      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App