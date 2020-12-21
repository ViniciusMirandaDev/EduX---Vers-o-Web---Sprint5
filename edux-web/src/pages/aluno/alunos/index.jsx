import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import { useEffect, useState } from 'react';


const Alunos = () => {

    const [alunos, setAlunos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [turmas, setTurmas] = useState([]);
    const [curso, setCursos] = useState([]);



    useEffect(() => {
        listarUsuarios();
        listarTurmas();
        listarCursos();
    }, [])

    const listarUsuarios = () => {
        fetch(`http://localhost:5000/api/Usuario`)
            .then(response => response.json())
            .then(dados => {
                setUsuarios(dados);
            })
            .catch(err => console.error(err));
    }

    const listarTurmas = () => {
        fetch(`http://localhost:5000/api/Turma`)
            .then(response => response.json())
            .then(dados => {
                setTurmas(dados);
            })
            .catch(err => console.error(err));
    }

    const listarCursos = () => {
        fetch(`http://localhost:5000/api/curso`)
            .then(response => response.json())
            .then(dados => {
                setCursos(dados.data);
            })
            .catch(err => console.error(err));
    }


    let name = ('');





    return (
        <div>
            <Menu />
            <h1 style={{ marginLeft: "705px", marginTop: "20px" }}> Alunos </h1>
            <br />
            <table class="table table-bordered" style={{ width: '630px', marginLeft: '470px', marginTop: '30px' }}>
                <thead style={{ marginLef: '300px' }}>
                    <tr style={{ marginLeft: '20px' }}>
                        <th >Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {usuarios.map(user => {
                         console.log(user)
                        if (user.idPerfil === "c13abfdc-7887-4f1d-911e-cb3bbf3ce688") {
                            return (
                               
                                <tr>
                                    <td>{user.nome}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )

                        }
                    })}





                </tbody>
            </table>

            < Rodape />
        </div>
    )
}

export default Alunos;