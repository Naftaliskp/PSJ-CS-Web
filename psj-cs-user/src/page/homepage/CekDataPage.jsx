import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import CekData from '../../components/CekData'
import Loading from '../../components/loader/Loading'


function CekDataPage() {
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
            <CekData/>
          </>
        ) }
    </>
  )
}
export default CekDataPage