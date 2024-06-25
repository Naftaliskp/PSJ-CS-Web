import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import CekData from '../../components/CekData'
import Loading from '../../components/loader/Loading'
import Login from '../authenticate/Login'
import useToken from './useToken';


function CekDataPage() {
  const { token, setToken } = useToken();
  const [ isLoading, setIsLoading ] = useState(true);
  
  useEffect( () => {
    window.scrollTo(0, 0);
      setTimeout( () => {
        setIsLoading(false);
      }, 1500 )
  }, [] )
  
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
        { isLoading ? (
          <Loading/>
        ): (
          <>
            <CekData/>
          </>
        ) }
    </>
  )
}
export default CekDataPage