import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { API_KEY_USER, API_KEY_COMPANY, KEY_SESSION  } from '../../env/env'
import { loginSession } from '../../redux/action/userSession'
import { Container, Row, Card, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector( state => state.userSession );
    const [ password, setPassword ] = useState();

    const createSessionObj = async (password, form) => {
        const resUser = await axios.get(API_KEY_USER);
        const users = resUser.data;

        const resCompany = await axios.get(API_KEY_COMPANY);
        const companies = resCompany.data;

        const findUser = users.findIndex( index => index.email == email && index.password == password );
        const findCompany = companies.findIndex( index => index.company_email == email && index.company_password == password );

        if(findUser !== -1) {
            const findUserSession = users.find( index => index.email == email && index.password == password );
        
            localStorage.setItem(KEY_SESSION, JSON.stringify(findUserSession));
            dispatch(loginSession(findUserSession));
            navigate('/');
        }else if(findCompany !== -1) {
            const findCompanySession = companies.find( index => index.company_email == email && index.company_password == password );
            localStorage.setItem(KEY_SESSION, JSON.stringify(findCompanySession));
            dispatch(loginSession(findCompanySession));
            navigate('/dashboard');
        }else {
           return MySwal.fire({
                icon: 'error',
                title: 'Login Gagal',
                text: 'Maaf email dan password yang anda masukan tidak cocok dengan akun manapun!',
            })
        }
        
    }

    const handleLogin = (e) => {
        e.preventDefault();
        createSessionObj(email, password, e.target);
    }

  return (
        <Container fluid className='authenticate py-5' >
                <Row>
                    <Card className='col-12 col-sm-10 mx-auto rounded shadow-lg' >
                        <Row className='d-flex justify-content-start'>
                            <Col xs={10} md={5} className='p-3 mx-auto my-auto'>
                                <Form onSubmit={ handleLogin } >
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

export default Login