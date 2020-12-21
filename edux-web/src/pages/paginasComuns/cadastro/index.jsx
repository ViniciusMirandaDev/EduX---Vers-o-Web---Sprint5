import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import { Container, Form, Button } from 'react-bootstrap';
import logo from "../../../assets/img/logo_2.png"
import jwt_decode from "jwt-decode";
import './index.css';

const Cadastrar = () => {
    const history = useHistory();

    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [perfil, setPerfil] = useState([]);

    const [dataCadastro, setDataCadastro] = useState('');
    const [dataUltimoAcesso, setDataUltimoAcesso] = useState('');

    const [perfilId, setPerfilId] = useState('');
    

    useEffect(() => {
        listarPermissoes();
    }, []);

    const listarPermissoes = () => {

        fetch('http://localhost:5000/api/Perfil')
            .then(response => response.json())
            .then(dados => {
                setPerfil(dados);
            })
            .catch(err => console.error(err));
    }
    const salvar = (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/api/Usuario', {
            method: 'POST',
            body: JSON.stringify({
                nome     : nome,
                email    : email,
                senha    : senha,
                idPerfil : perfilId,
            }),
            headers: {
                'content-type': 'application/json'
            }
            })
            .then(response => {
                if (response.ok) {
                    alert('Cadastro realizado com sucesso!')
                    history.push('/login');
                }
            })
    }

    return (
        <div>
            <Menu />
            <Container className='form-height'>
                <Form className='form-signin' onSubmit={event => salvar(event)}>
                    <div className='text-center'>
                        <img src={logo} alt='EduX' style={{ width: '139px' }} />
                    </div>
                    <br />
                    <small>Cadastre os dados Abaixo</small>
                    <hr />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nome </Form.Label>
                        <Form.Control type="text" placeholder="Nome Completo" required value={nome} onChange={event => setNome(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" required value={email} onChange={event => setEmail(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" required value={senha} onChange={event => setSenha(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Permissão</Form.Label>
                        <Form.Control as="select" value={perfilId} onChange={event => setPerfilId(event.target.value)}>
                            <option value={0}>Selecione</option>
                            {
                                perfil.map((item, index) => {
                                    
                                    if(item.permissao !== 'Administrador')

                                    return (
                                        <option key={index} value={item.id }>{item.permissao}</option>
                                    )
                                })
                            }
                        </Form.Control>
                    </Form.Group>

                    <Button variant="dark" type="submit" style={{ marginLeft: "100px", width: "100px" }} >
                        Cadastrar
                    </Button>
                    <br /><br />
                    <a href='/login' style={{ marginTop: '30px', marginLeft: "100px" }}>Já tenho conta!</a>
                </Form>
            </Container>
            <Rodape />
        </div>
    )
}

export default Cadastrar