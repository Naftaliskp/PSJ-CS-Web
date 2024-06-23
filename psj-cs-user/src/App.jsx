import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Login from './page/authenticate/Login'
import Homepage from './page/homepage/Homepage'
import Article from './page/information/Article'
import Footer from './components/Footer'
import Pengaduan from './page/pengaduan/Pengaduanpage'
import CekData from './page/homepage/CekDataPage'
import Navigation from './components/Navigation'

function App() {


  return (
    <div className="App">
        <Navigation/>
          <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/FormPengaduan' element={<Pengaduan/>} />
              <Route path='/article' element={<Article/>} />
              <Route path='/cekdata' element={<CekData/>} />
          </Routes>
          <Footer/>
    </div>
  )
}

export default App
