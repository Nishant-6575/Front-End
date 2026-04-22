import React from "react"
import Header from "./Layout/Common/Header"
import Footer from "./Layout/Common/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Layout/Pages/Home"
import About_Us from "./Layout/Pages/About_Us"
// import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About1 from "./Layout/Pages/About1"
import About2 from "./Layout/Pages/About2"


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About_Us />}>
            <Route path="about1" element={<About1 />}></Route>
            <Route path="about2" element={<About2 />}></Route>
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
