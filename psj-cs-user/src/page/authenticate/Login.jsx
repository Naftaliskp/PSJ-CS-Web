import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { API_KEY_USER, API_KEY_COMPANY, KEY_SESSION  } from '../../env/env'
import { loginSession } from '../../redux/action/userSession'
import { Container, Row, Card, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


async function loginUser(credentials) {
    return fetch('http://192.168.100.52:5000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    // const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          "email": email,
          "pwd": password
        });
        setToken(token);
        // navigate('/');
      }

  return (
        <Container fluid className='authenticate py-5' >
                <Row>
                    <Card className='col-12 col-sm-10 mx-auto rounded shadow-lg' >
                        <Row className='d-flex justify-content-start'>
                            <Col xs={10} md={5} className='p-3 mx-auto my-auto'>
                            <Form onSubmit={ handleSubmit } >
                                <h1 className='mt-5'>Login</h1>
                                    <Form.Group className='mb-5'>
                                        <div className='group'>
                                            <input required type='email' onChange={ (e) => setEmail(e.target.value) } className='input w-100 mt-4' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Email</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mb-4'>
                                        <div className='group'>
                                            <input required type='password' onChange={ (e) => setPassword(e.target.value) } className='input w-100' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Password</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mb-5'>
                                        <Link>
                                        <p className='text-danger'>Lupa Password?</p>
                                        </Link>
                                        <Button variant='danger' type='submit' className='w-100 my-2'>Log in</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Row>
        </Container>
)
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

// export default Login