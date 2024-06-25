import React, { useEffect, useState } from 'react'
import Loading from '../../components/loader/Loading';
import SectionPengaduan from '../../components/SectionPengaduan';
import Login from '../authenticate/Login'
import useToken from '../homepage/useToken';

function Pengaduanpage() {
    const [ isLoading, setIsLoading ] = useState(true);
    const { token, setToken } = useToken();

    if(!token) {
      return <Login setToken={setToken} />
    }

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
