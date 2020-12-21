import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import { useEffect, useState } from 'react';

const TurmaAdmin = () => {

    
    
    const [turmas, setTurmas] = useState([]);


    useEffect(() => {
        
        listarTurmas();
        
    }, [])

    const listarTurmas = () => {
        fetch(`http://localhost:5000/api/Turma`)
            .then(response => response.json())
            .then(dados => {
                setTurmas(dados);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Menu />
            <h1 style={{ marginLeft: "705px", marginTop: "20px" }}> Turmas </h1>
            <br />
            <table class="table table-bordered" style={{ width: '630px', marginLeft: '470px', marginTop: '30px' }}>
                <thead style={{ marginLef: '300px' }}>
                    <tr style={{ marginLeft: '20px' }}>
                        <th >Disponíveis:</th>
                    </tr>
                </thead>
                <tbody>

                    {turmas.map(user => {
                         {
                            return (
                               
                                <tr>
                                    <td>{user.descricao}</td>
        
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

export default TurmaAdmin;