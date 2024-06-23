import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Penghuni from '../../components/Penghuni'
import Loading from '../../components/loader/Loading'


function Userpage() {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect( () => {
    window.scrollTo(0, 0);
      setTimeout( () => {
        setIsLoading(false);
      }, 1500 )
  }, [] )
  return (
    <>
        { isLoading ? (
          <Loading/>
        ): (
          <>
            <Penghuni/>
          </>
        ) }
    </>
  )
}
export default Userpage