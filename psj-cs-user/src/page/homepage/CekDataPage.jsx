import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap'
import CekData from '../../components/CekData'
import Loading from '../../components/loader/Loading'
import Login from '../authenticate/Login'
import useToken from './useToken';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);


function CekDataPage() {
  const navigate = useNavigate();
  const { session } = useSelector(state => state.userSession);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        if (!session) {
            MySwal.fire({
                icon: 'warning',
                title: 'Maaf, untuk dapat lanjut anda harus login terlebih dahulu!',
                showConfirmButton: true,
                didClose: () => {
                    navigate('/login');
                }
            });
        }
    }, [session, navigate]);

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