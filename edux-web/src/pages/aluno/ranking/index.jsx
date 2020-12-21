import React from 'react';
import Menu from '../../../components/menu';
import Ranking from '../../../components/ranking';
import Rodape from '../../../components/rodape';


const RankingAluno = () => {

    
    return (
        <div>
            <Menu />
            <h1 style={{marginLeft:"640px", marginTop:"20px", marginBottom:'40px'}}> Ranking Aluno </h1>
            <Ranking></Ranking>
            < Rodape/>
        </div> 
    )
}

export default RankingAluno;