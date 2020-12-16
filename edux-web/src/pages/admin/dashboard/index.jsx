import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';


const Dashboard = () => {

    
    return (
        <div>
            <Menu />
                <h1 style={{marginLeft:"665px", marginTop:"20px"}}> DashBoard </h1>
                <br/>
                <p style={{marginLeft:"300px"}}>Esta página irá ser lançada futuramente quando houverem mais atualizações no sistema, pois ainda não é possível captar as estatísticas.</p>
                <p style={{marginLeft:"700px"}}>Atenciosamente,
                    <br/>
                </p>
                <p style={{marginLeft:"682px"}}>Equipe de dev DevXS.</p>
            < Rodape/>
        </div> 
    )
}

export default Dashboard;