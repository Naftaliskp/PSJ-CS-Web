import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { KEY_SESSION } from '../env/env'
import { logOut } from '../redux/action/userSession'
import { Nav, Navbar, NavDropdown, Container,  Form, Button } from 'react-bootstrap'
import Logo from '../assets/image/psj-logo.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

const MySwal = withReactContent(Swal)

const linkStyle = { color: '#dc3545', fontWeight: 'bold', borderBottom: '3px solid #dc3545', backgroundColor: '#FFFFFF' }
function Navigation() {

 const navigate = useNavigate()
 const dispatch = useDispatch();
 const {isLogin} = useSelector( state => state.userSession );

  const logout = () => {
    MySwal.fire({
      title: 'Yakin ingin keluar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, keluar!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logOut());
        localStorage.removeItem(KEY_SESSION);
        MySwal.fire({
          icon: 'success',
          title: 'Berhasil Logout!'
        }
        )
        navigate('/login');
      }
    })

}


  return (
    <Navbar collapseOnSelect expand="md" variant="light" className='bg-light border-bottom border-5 shadow-md border-danger py-3 position-sticky top-0' style={{ zIndex: '9' }}>
    <Container>
      <NavLink to='/'>
            <img src={Logo} width='100px' />
      </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex w-100 align-items-center justify-content-end">
              <NavLink to="/" style={({isActive}) => (isActive ? linkStyle : undefined)} className='nav-item text-danger mb-1 mx-3' >  User </NavLink>
              <NavLink to="/penghuni" style={({isActive}) => (isActive ? linkStyle : undefined)} className='nav-item text-danger mb-1 mx-3' >  Data Penghuni </NavLink>
              <NavLink to="/informasi" style={({isActive}) => (isActive ? linkStyle : undefined)} className='nav-item text-danger mb-1 mx-3' >  Informasi </NavLink>
              <NavLink to="/keluhan" style={({isActive}) => (isActive ? linkStyle : undefined)} className='nav-item text-danger mb-1 mx-3' >  Keluhan </NavLink>
                {/* <NavLink className='nav-item text-dark p-2 me-3' to="#pricing">Profile</NavLink> */}
                { isLogin==false ? (
                <NavLink to='/login' className='btn btn-danger' ><FaSignInAlt className='me-2'/>Login</NavLink>
                ): (
                <Nav.Link onClick={ () => logout() } className='btn btn-danger text-light'><FaSignOutAlt className='me-2 '/>Logout</Nav.Link>
                ) }
                
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Navigation