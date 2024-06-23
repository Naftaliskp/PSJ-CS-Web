import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { FaCopyright, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='container-fluid text-light'>
        <Row className='p-3 bg-transparant-dark'>
                <p className='text-light text-center'>Copyright <FaCopyright/> PT JAYALAND | All Right Reserved</p>
        </Row>
    </footer>
  )
}

export default Footer
