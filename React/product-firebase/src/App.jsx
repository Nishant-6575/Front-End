import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage'
import { Bounce, ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

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
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
