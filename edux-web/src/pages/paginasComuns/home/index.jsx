import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import { Carousel, Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './index.css';

const Home = () => {
    return (
        <div>
            <Menu />
            <Carousel >
                <Carousel.Item className="caroussel-height">
                    <img
                        className="d-block w-100"
                        src="https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2019/04/saiba-como-elaborar-um-cronograma-de-estudos-infalc3advel.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-black">Por que estudar?</h3>
                        <p className="text-black">O estudo é a principal arma contra a ignorância.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="caroussel-height">
                    <img
                        className="d-block w-100"
                        src="https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2019/04/saiba-como-elaborar-um-cronograma-de-estudos-infalc3advel.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-black">Por que estudar?</h3>
                        <p className="text-black">O estudo é a principal arma contra a ignorância.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Jumbotron className="text-center jumbotron-color">
                <h1>O melhor site para seus estudos!</h1>
                <p>
                    Encontre eventos nos mais diversos segmentos de forma rápida
            </p>
                <p>
                    <Button variant='dark' href='/login'>Login</Button>
                    <Button variant="success" href='/cadastrar' style={{ marginLeft: '40px' }}>Cadastrar</Button>
                </p>
            </Jumbotron>
            <Container style={{marginLeft: "225px"}}>
                <Row className="text-center">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://clebertoledo.com.br/wp-content/uploads/2018/12/Escola-SESI-em-Gurupi-est%C3%A1-com-matr%C3%ADculas-abertas-institui%C3%A7%C3%A3o-oferecer%C3%A1-Novo-Ensino-M%C3%A9dio.jpg" />
                            <Card.Body>
                                <Card.Title>SESI</Card.Title>
                                <Card.Text>
                                    O Serviço Social da Indústria é uma rede de instituições paraestatais brasileiras e de atuação em âmbito nacional.
                        </Card.Text>
                                <Button variant="dark" href="https://www.sesisp.org.br/">Veja!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.jornalgrandebahia.com.br/2018/08/Servi%C3%A7o-Nacional-de-Aprendizagem-Industrial-Senai.jpg" />
                            <Card.Body>
                                <Card.Title>SENAI</Card.Title>
                                <Card.Text>
                                    Serviço Nacional de Aprendizagem Industrial é uma instituição privada brasileira de interesse público, sem fins lucrativos, com personalidade jurídica de direito privado, estando fora da administração pública.
                            </Card.Text>
                                <Button variant="dark" href='http://www.sp.senai.br/'>Veja!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://fdr.com.br/wp-content/uploads/2020/03/ECONOMIA-1.Senac-Resende-abre-inscri%C3%A7%C3%B5es-para-cursos-profissionalizantes.CYNTIA-FREITAS..jpg" />
                            <Card.Body>
                                <Card.Title>Senac</Card.Title>
                                <Card.Text>
                                    O Serviço Nacional de Aprendizagem Comercial é uma instituição brasileira de educação profissional aberta a toda a sociedade.
                            </Card.Text>
                                <Button variant="dark" href="https://www.sp.senac.br/">Veja!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Rodape />
        </div>
    )

}


export default Home;