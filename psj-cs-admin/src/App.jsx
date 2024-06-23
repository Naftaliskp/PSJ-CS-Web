import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Login from './page/authenticate/Login'
import User from './page/user/Userpage'
import Penghuni from './page/penghuni/Penghunipage'
import Informasi from './page/informasi/Informasipage'
import Article from './page/information/Article'
import Keluhan from './page/keluhan/keluhanpage'
import Footer from './components/Footer'
import Pengaduan from './page/pengaduan/Pengaduanpage'
import Navigation from './components/Navigation'

function App() {


  return (
    <div className="App">
        <Navigation/>
          <Routes>
              <Route path='/' element={<User/>} />
              <Route path='/penghuni' element={<Penghuni/>} />
              <Route path='/informasi' element={<Informasi/>}/>
              <Route path='/keluhan' element={<Keluhan/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/FormPengaduan' element={<Pengaduan/>} />
              <Route path='/article' element={<Article/>} />
          </Routes>
          <Footer/>
    </div>
  )
}

export default App
