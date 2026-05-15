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
import { Bounce, ToastContainer } from 'react-toastify'
import PackMng from './Admin/Apages/PackMng'
import BlogManage from './Admin/Apages/BlogManage'
import PricingManage from './Admin/Apages/PricingManage'
import Alogin from './Admin/Apages/Alogin'
import Ulogin from './website/pages/Ulogin'
import URegister from './website/pages/URegister'
import UserManage from './Admin/Apages/Usermanage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
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
          <Route path='/userlogin' element={<Ulogin />} />
          <Route path='/userregister' element={<URegister />} />

          <Route path='*' element={<NotFound />} />

          {/* admin */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/packagemanage' element={<PackManage />} />
          <Route path='/packmng' element={<PackMng />} />
          <Route path='/sermanage' element={<ServiceManage />} />
          <Route path='/blogmanage' element={<BlogManage />} />
          <Route path='/pricemanage' element={<PricingManage />} />
          <Route path='/usermanage' element={<UserManage />} />

          <Route path='/packadd' element={<PackAdd />} />

          <Route path='/adminlogin' element={<Alogin />} />


        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App