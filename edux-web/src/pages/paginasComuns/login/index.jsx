import React, { useState }  from 'react';
import { useHistory } from "react-router-dom";

import jwt_decode from "jwt-decode";
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import {Container, Form, Button} from 'react-bootstrap';
import logo from "../../../assets/img/logo_2.png"
import './index.css';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        fetch('http://localhost:49932/api/Login',{
            method : 'POST',
            body : JSON.stringify({
                email : email,
                senha : senha
            }),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }

            alert('Dados Inválidos');
        })
        .then(data => {
            localStorage.setItem('token-edux', data.token);

            let usuario = jwt_decode(data.token);

            console.log(data.token);

            if(usuario.role === 'Administrador')
                history.push('/admin/dashboard');
            else
                history.push('/');
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
        <Menu />
        <Container className='form-height'>
                <Form className='form-signin' onSubmit={ event => logar(event)} >
                    <div className='text-center'>
                     <img src={logo} alt='EduX' style={{ width : '139px'}} />
                    </div>
                    <br/>
                    <small className='text-align'>Coloque seus dados Abaixo</small>
                    <hr/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" value={email} onChange={ event => setEmail(event.target.value)} placeholder="Informe o email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" value={senha} onChange={ event => setSenha(event.target.value)} placeholder="Senha"  required/>
                    </Form.Group>
                    <Button variant="dark" type="submit"style={{ marginLeft:"100px", width:"100px"}} >
                        Logar
                    </Button>
                    <br/><br/>
                    <a href='/cadastrar' style={{ marginTop :'30px', marginLeft:"90px"}}>Não tenho conta!</a>
                </Form>
            </Container>
        <Rodape />
        </div>
    )
}

export default Login;