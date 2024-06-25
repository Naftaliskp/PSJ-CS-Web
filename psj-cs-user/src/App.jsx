import React, { useEffect, useState  } from 'react';
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
import useToken from './page/homepage/useToken'
import { useSelector, useDispatch } from 'react-redux'
import { getSession } from './redux/action/userSession'
import { getCookie } from './cookie/cookie'
import Loading from './components/loader/Loading'


function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

useEffect( () => {
  const token = getCookie('token');
  if(token) {
    dispatch(getSession(token, setIsLoading));
  }else {
    setIsLoading(false);
  }
},[] )

  return (
    <>
    { isLoading ? (
      <Loading/>
    ) : (
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
</>
  )

}

export default App
