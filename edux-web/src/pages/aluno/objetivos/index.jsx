import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import {Card, Button, Container, Row, Col} from "react-bootstrap";

const ObjetivosAluno = () => {

    
    return (
        <div>
            <Menu/>
            
            <Container>
            <h2 style={{lineHeight: "300%", textAlign: "center"}}>Objetivos</h2>
                <Row style={{marginTop: "50px"}}>
                   
                    
                        
                                <Col  xs={4}>
                                    <Card style={{margin: "25px"}}>
                                        <Card.Body>
                                            <Card.Title>Matemática</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                            <Card.Text>
                                                Você tem 2 Objetivos para cumprir
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col  xs={4}>
                                    <Card style={{margin: "25px"}}>
                                        <Card.Body>
                                            <Card.Title>Português</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                            <Card.Text>
                                                Você tem 1 Objetivos para cumprir
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={4}>
                                    <Card style={{margin: "25px"}}>
                                        <Card.Body>
                                            <Card.Title>Biologia</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                            <Card.Text>
                                                Você tem 5 Objetivos para cumprir
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col  xs={4}>
                                    <Card style={{margin: "25px"}}>
                                        <Card.Body>
                                            <Card.Title>Geografia</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                            <Card.Text>
                                                Você tem 8 Objetivos para cumprir
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col  xs={4}>
                                    <Card style={{margin: "25px"}}>
                                        <Card.Body>
                                            <Card.Title>Historia</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                            <Card.Text>
                                                Você tem 3 Objetivos para cumprir
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col  xs={4}>
                                    <Card style={{margin: "25px"}}>
                                        <Card.Body>
                                            <Card.Title>Desenvolvimento</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                            <Card.Text>
                                                Você tem 1 Objetivos para cumprir
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                            
                        
                    
                </Row>
            </Container>
            <Rodape/>
        </div>
    )
}

export default ObjetivosAluno;