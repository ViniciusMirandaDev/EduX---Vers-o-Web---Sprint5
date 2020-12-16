//Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from "jwt-decode";

//Css
import './index.css';

//Pages


import Login from './pages/paginasComuns/login';
import Home from './pages/paginasComuns/home';
import Cadastrar from './pages/paginasComuns/cadastro';
import Timeline from './pages/paginasComuns/timeline';
import Alunos from './pages/aluno/alunos';
import Perfil from './pages/paginasComuns/perfil';
import ObjetivosAluno from './pages/aluno/objetivos';
import TurmasUsuarios from './pages/aluno/turmas';
import RankingAluno from './pages/aluno/ranking';
import ObjetivosProfessor from './pages/professor/objetivos';
import TurmasProfessor from './pages/professor/turmas';
import TurmaAdmin from './pages/admin/turmas';
import Dashboard from './pages/admin/dashboard';

//Tratamento para usuário comum
const RotaPrivada = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = {
      props => 
      localStorage.getItem('token-edux') !== null ?
        <Component {...props} /> :
        <Redirect to={{pathname : '/login', state :{from : props.location}}} /> 
    }
  />
);

//Tratamento para Admin
const RotaPrivadaAdmin = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = {
      props => 
      localStorage.getItem('token-edux') !== null && jwt_decode(localStorage.getItem('token-edux')).role === 'Administrador' ?
        <Component {...props} /> :
        <Redirect to={{pathname : '/login', state :{from : props.location}}} /> 
    }
  />
);

//Tratamento para professor
const RotaPrivadaProfessor = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = {
      props => 
      localStorage.getItem('token-edux') !== null && jwt_decode(localStorage.getItem('token-edux')).role === 'Professor' ?
        <Component {...props} /> :
        <Redirect to={{pathname : '/login', state :{from : props.location}}} /> 
    }
  />
);

const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/cadastrar' component={Cadastrar} />
      <RotaPrivada path='/timeline' component={Timeline} />
      <RotaPrivada path='/alunos' component={Alunos} />
      <RotaPrivada path='/perfil' component={Perfil} />
      <RotaPrivada path='/objetivosaluno' component={ObjetivosAluno} />
      <RotaPrivada path='/turmas' component={TurmasUsuarios} />
      <RotaPrivada path='/ranking' component={RankingAluno} />
      <RotaPrivadaProfessor path='/professor/objetivos' component={ObjetivosProfessor} />
      <RotaPrivadaProfessor path='/professor/turmas' component={TurmasProfessor} />      
      <RotaPrivadaAdmin path='/admin/turmas' component={TurmaAdmin} />          
      <RotaPrivadaAdmin path='/admin/dashboard' component={Dashboard} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
