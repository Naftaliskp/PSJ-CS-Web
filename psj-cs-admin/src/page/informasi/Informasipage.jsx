import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Informasi from '../../components/Informasi'
import Loading from '../../components/loader/Loading'
import SectionInformation from '../../components/SectionInformation'


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
            <SectionInformation/>
            <Informasi/>
          </>
        ) }
    </>
  )
}
export default Userpage