import React, { useState, useEffect } from 'react';
// import { ListaLocais, LocalItem, LocalTitle, LocalDescription } from './DadosApiStyled';


function DadosAPI() {
    const [dadosAPI, setDadosAPI] = useState([]);

    useEffect(() => {
        const fetchDadosAPI = async () => {
            try {
                const response = await fetch('http://localhost:3003/locais');
                const data = await response.json();
                setDadosAPI(data || []);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchDadosAPI();
    }, []);
    return (
        <div>
            <ul className="ListaLocais">
                {dadosAPI.map((local) => (
                    <li key={local.id}>
                        WorkStation {local.id} : {local.local} / telefone {local.telefone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DadosAPI;
