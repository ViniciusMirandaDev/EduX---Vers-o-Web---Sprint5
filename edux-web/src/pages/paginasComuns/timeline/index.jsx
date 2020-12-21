import React, {useState, useEffect} from 'react';
import Menu from "../../../components/menu";
import Rodape from "../../../components/rodape";
import {Card, Form, Button, Container, FormFile} from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
const Timeline = () => {
    document.title = "Dicas";

    const [dicas, setDicas] = useState([]);

    const token = localStorage.getItem("token-edux");
    const idUsuario = jwt_decode(token).id;

    const [descricao, setDescricao] = useState("");
    const [urlImagem, setUrlImagem] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        listar();
    }, [])

    const upload = (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append("arquivo", event.target.files[0]);

        fetch(`http://localhost:5000/api/upload`, {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            setUrlImagem(data.url);
            console.log(data)
        })
        .catch(err => console.log(err));
    }

    const salvar = (event) => {
        event.preventDefault();

        let dica = {
            texto: descricao,
            urlImagem: urlImagem,
            idUsuario: idUsuario
        }

        let metodo = (id === "" ? "POST" : "PUT");
        let urlPostOuPut = (id === "" ? `http://localhost:5000/api/dica` : `http://localhost:5000/api/dica/${id}`);
    
        fetch(urlPostOuPut, {
            method: metodo,
            body: JSON.stringify(dica),
            headers: {
                "content-type": "application/json",
                "authorization": "Bearer " + token
            } 
        })
        .then(response => response.json())
        .then(response => {
            listar();
        })
        .catch(err => console.log(err));
    }

    const listar = () => {
        fetch(`http://localhost:5000/api/dica`)
        .then(response => response.json())
        .then(dados => {
            setDicas(dados.data);
            limparCampos();
        })
        .catch(err => console.log(err));
    }

    const limparCampos = () => {
        setDescricao("");
        setId("");
        setUrlImagem("");
    }

    const deletar = (id) => {
        fetch(`http://localhost:5000/api/dica/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(dados => {
            listar();
        })
        .catch(err => console.log(err));
    }

    const editar = (id) => {
        fetch(`http://localhost:5000/api/dica/buscar/id/${id}`)
        .then(response => response.json())
        .then(dado => {
            setId(dado.id);
            setDescricao(dado.texto);
            setUrlImagem(dado.urlImagem);
        })
        .catch(err => console.log(err));
    }

    return(
        <div>
            <Menu/>
            <Container style={{margin: "50px auto"}}>
                <Form style={{marginLeft : '200px', width: "90vw"}} onSubmit={event=>salvar(event)}>
                    <div style={{display: "flex"}}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control style={{border : '2px solid #23272B', borderRadius : '15px', width: "50vw", height: "90px"}} as="textarea" placeholder="O que você está pensando" rows={3} value={descricao} onChange={event=>setDescricao(event.target.value)} required/>
                        </Form.Group>
                            <FormFile style={{display: "flex"}}>
                                <Form.Label htmlFor="fileDica"><i className="fas fa-paperclip" style={{color: "#23272B", fontSize: "30px", marginLeft: "15px", marginTop:'20px'}}></i></Form.Label>
                                <Form.File 
                                    id="fileDica"
                                    label="Imagem da categoria"
                                    custom
                                    onChange={event => upload(event)}
                                    style={{display: "none"}}
                                />
                                {urlImagem && <div style={{height: "90px", width: "auto", minWidth: "90px", marginLeft: "20px", borderRadius: "15px", border : '2px solid #007bff', background: `url(${urlImagem})`, backgroundSize: "cover"}}></div>}
                            </FormFile>
                    </div>
                    <Button style={{marginLeft:'320px'}} variant="dark" type="submit">Enviar</Button>
                </Form>
            </Container>
            <Container style={{margin: "100px auto"}}>
                <div style={{margin: "auto", width: "100%", background: "gray", height: "1px"}}></div>
                <Container style={{margin: "50px auto"}}>
                    {
                        dicas.map((dica, index) => {
                            let role = "";
                            if(dica.usuario.idPerfil==="a5fcbaa3-e286-4b7a-b90b-8c840d8007c8") 
                                role = "Professor";
                            else 
                                role = "Aluno";
                            if(dica.idUsuario===idUsuario) {
                                if(dica.urlImagem==="") {
                                    return (
                                        <>
                                            <Card style={{ width: '18rem', margin: "20px auto", boxShadow: "0px 0px 1px black" }}>
                                                <Card.Body style={{padding: "10px"}}>
                                                    <Card.Title style={{fontSize: "15px", display: "flex", justifyContent: "space-between", width: "100%"}}>
                                                        <span style={{color: "#00C2EE"}}>{`(${role}) Eu`}</span>
                                                        <div style={{display: "flex", alignItems: "center", margin: "0"}}>
                                                            <label htmlFor={index} style={{color: "#FFFF00"}}> <i className="fas fa-pencil-alt" style={{margin: "0 40px", marginRight: "10px"}}></i> </label>
                                                            <input type="button" id={index} value={dica.id} onClick={event=>editar(event.target.value)} style={{display: "none"}}/>
                                                            <label htmlFor={index+0.5} style={{color: "red"}}> <i className="fas fa-trash-alt"></i> </label>
                                                            <input type="button" value={dica.id} id={index+0.5} style={{display: "none"}} onClick={event=>deletar(event.target.value)}/>
                                                        </div>
                                                    </Card.Title>
                                                    <Card>
                                                        <Card.Body style={{padding: "10px"}}>
                                                            <Card.Text style={{fontSize: "15px", textAlign: "justify-all"}}>{dica.texto}</Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                    
                                                </Card.Body>
                                            </Card>
                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <>
                                            <Card style={{ width: '18rem', margin: "20px auto", boxShadow: "0px 0px 1px black" }}>
                                                <Card.Body style={{padding: "10px"}}>
                                                    <Card.Title style={{fontSize: "15px", display: "flex", justifyContent: "space-between", width: "100%"}}>
                                                        <span style={{color: "#00C2EE"}}>{`(${role}) Eu`}</span>
                                                        <div style={{display: "flex", alignItems: "center", margin: "0"}}>
                                                            <label htmlFor={index} style={{color: "#007bff"}}> <i className="fas fa-pencil-alt" style={{margin: "0 40px", marginRight: "10px"}}></i> </label>
                                                            <input type="button" id={index} value={dica.id} style={{display: "none"}}  onClick={event=>editar(event.target.value)}/>
                                                            <label htmlFor={index+0.5} style={{color: "red"}}> <i className="fas fa-trash-alt"></i> </label>
                                                            <input type="button" value={dica.id} id={index+0.5} style={{display: "none"}}  onClick={event=>deletar(event.target.value)}/>
                                                        </div>
                                                    </Card.Title>
                                                    <Card>
                                                        <Card.Img src={dica.urlImagem}/>
                                                        <Card.Body style={{padding: "10px"}}>
                                                            <Card.Text style={{fontSize: "15px", textAlign: "justify-all"}}>{dica.texto}</Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                    
                                                </Card.Body>
                                            </Card>
                                        </>
                                    )
                                }
                            }
                            else {
                                if(dica.urlImagem==="") {
                                    return (
                                        <>
                                            <Card style={{ width: '18rem', margin: "20px auto", boxShadow: "0px 0px 1px black" }}>
                                                <Card.Body style={{padding: "10px"}}>
                                                    <Card.Title style={{fontSize: "15px", display: "flex", justifyContent: "space-between", width: "100%"}}>
                                                        {`(${role}) ${dica.usuario.nome}`}
                                                    </Card.Title>
                                                    <Card>
                                                        <Card.Body style={{padding: "10px"}}>
                                                            <Card.Text style={{fontSize: "15px", textAlign: "justify-all"}}>{dica.texto}</Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Body>
                                            </Card>
                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <>
                                            <Card style={{ width: '18rem', margin: "20px auto", boxShadow: "0px 0px 1px black" }}>
                                                <Card.Body style={{padding: "10px"}}>
                                                    <Card.Title style={{fontSize: "15px", display: "flex", justifyContent: "space-between", width: "100%"}}>
                                                        {`(${role}) ${dica.usuario.nome}`}
                                                    </Card.Title>
                                                    <Card>
                                                        <Card.Img src={dica.urlImagem}/>
                                                        <Card.Body style={{padding: "10px"}}>
                                                            <Card.Text style={{fontSize: "15px", textAlign: "justify-all"}}>{dica.texto}</Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                    
                                                </Card.Body>
                                            </Card>
                                        </>
                                    )
                                }
                            }
                        })
                    }
                </Container>
                <p style={{marginLeft:'410px'}}>Página realizada com a ajuda do grupo 7</p>
            </Container>   
            <Rodape/>
        </div>
    )
}
export default Timeline;