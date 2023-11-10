// DadosAPI.js
import React, { useState, useEffect } from 'react';

function DadosAPI() {
    const [dadosAPI, setDadosAPI] = useState([]);

    useEffect(() => {
        const fetchDadosAPI = async () => {
            try {
                const response = await fetch('http://localhost:3001/locais');
                const data = await response.json();
                console.log('Dados da API:', data);
                setDadosAPI(data.locais || []);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchDadosAPI();
    }, []); // Certifique-se de fornecer um array de dependências vazio para que o efeito seja executado apenas uma vez

    return (
        <div>
            <h2>Dados da API:</h2>
            <ul>
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
