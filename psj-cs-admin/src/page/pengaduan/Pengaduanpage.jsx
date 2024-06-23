import React, { useEffect, useState } from 'react'
import Loading from '../../components/loader/Loading';
import SectionPengaduan from '../../components/SectionPengaduan';

function Pengaduanpage() {
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
        ) : (
            <>
                <SectionPengaduan/>
            </>
        ) }
    </>
  )
}

export default Pengaduanpage
