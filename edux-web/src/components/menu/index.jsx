import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import  jwt_decode  from 'jwt-decode';
import { useHistory} from 'react-router-dom';



const Menu = () => {
    const history = useHistory();

    const sair = (event) => {
        event.preventDefault();

        localStorage.removeItem('token-edux');

        history.push('/')
    }

    const renderMenu = () => {
        const token = localStorage.getItem('token-edux');


        if(token === null){
            return (
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
                </Nav>
            );
        } else if( jwt_decode(token).role === 'Administrador'){
            return (
                <Nav>
                    <NavDropdown title={jwt_decode(token).nameid} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={ event => sair(event)}>Sair</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/admin/turmas">Turmas</Nav.Link>
                </Nav>
            )
        } else if( jwt_decode(token).role === 'Professor'){
            return (
                <Nav>
                    <NavDropdown title={jwt_decode(token).nameid} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={ event => sair(event)}>Sair</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/professor/objetivos">Objetivos</Nav.Link>
                    <Nav.Link href="/professor/turmas">Turmas</Nav.Link>
                    <Nav.Link href="/timeline">Timeline</Nav.Link>
                </Nav>
            )
        }
        else {
            return (
                <Nav style={{marginRight: "25px"}}>
                    <NavDropdown title={jwt_decode(token).nameid} id="basic-nav-dropdown" style={{marginRight: "10px"}}>
                        <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/ranking">Ranking</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={ event => sair(event)}>Sair</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/objetivosaluno">Objetivos</Nav.Link>
                    <Nav.Link href="/alunos">Alunos</Nav.Link>
                    <Nav.Link href="/turmas">Turmas</Nav.Link>
                    <Nav.Link href="/timeline">Timeline</Nav.Link>
                </Nav>
            )
        }

        
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Navbar.Brand style={{marginLeft: "25px"}} href="/" >EduX</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                
                { renderMenu() }
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;