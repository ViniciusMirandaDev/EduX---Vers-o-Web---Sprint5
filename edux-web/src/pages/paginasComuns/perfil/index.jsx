import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import jwt_decode from 'jwt-decode';
import './index.css';

const Perfil = () => {

    const token = localStorage.getItem('token-edux');

    const nomeUsuario = jwt_decode(token).nameid;
    const emailUsuario = jwt_decode(token).email;
    const tipoUsuario = jwt_decode(token).role;
    return (
        <div>
            <Menu />
            <h1 style={{ marginLeft: "705px", marginTop: "20px" }}> Perfil </h1>
            <br />
            <table class="table table-bordered" style={{width:'630px', marginLeft:'470px', marginTop:'30px'}}>
                <thead style={{ marginLef:'300px'}}>
                    <tr style={{ marginLeft:'20px'}}>
                        <th >Nome</th>
                        <th>Email</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{nomeUsuario}</td>
                        <td>{emailUsuario}</td>
                        <td>{tipoUsuario}</td>
                    </tr>
                </tbody>
            </table>

            < Rodape />
        </div>
    )
}

export default Perfil;