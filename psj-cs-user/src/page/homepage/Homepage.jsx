import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import BannerFeature from '../../components/BannerFeature'
import Loading from '../../components/loader/Loading'
import SectionInformation from '../../components/SectionInformation'


function Homepage() {
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
            <BannerFeature/>
            <SectionInformation/>
          </>
        ) }
    </>
  )
}
export default Homepage