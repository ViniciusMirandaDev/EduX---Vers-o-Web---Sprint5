import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import {Container, Form, Button} from 'react-bootstrap';
import logo from "../../../assets/img/logo_2.png"
import './index.css';

const Cadastrar = () => {
    return (
        <div>
        <Menu />
        <Container className='form-height'>
                <Form className='form-signin' >
                    <div className='text-center'>
                     <img src={logo} alt='EduX' style={{ width : '139px'}} />
                    </div>
                    <br/>
                    <small>Cadastre os dados Abaixo</small>
                    <hr/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nome </Form.Label>
                        <Form.Control type="text" placeholder="Nome Completo" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha"  required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Permissão(Inserir Guid Id) </Form.Label>
                        <Form.Control type="text" placeholder="Informe a permissão" required />
                    </Form.Group>
                    <Button variant="dark" type="submit"style={{ marginLeft:"100px", width:"100px"}} >
                        Cadastrar
                    </Button>
                    <br/><br/>
                    <a href='/login' style={{ marginTop :'30px', marginLeft:"100px" }}>Já tenho conta!</a>
                </Form>
            </Container>
        <Rodape />
        </div>
    )
}

export default Cadastrar