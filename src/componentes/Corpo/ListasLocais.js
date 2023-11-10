import React from 'react';
import ListaLocais from './ListaLocais'; // Certifique-se de ajustar o caminho conforme necessário

const SeuComponentePai = () => {
    const dados = {
        "locais": [
            { "id": 1, "local": "RUA ABC", "telefone": "9999-9999" },
            { "id": 2, "local": "RUA DEF", "telefone": "9999-9999" },
            // ... outros dados
        ]
    };

    return (
        <div>
            <h1>Lista de WorkStations</h1>
            <ListaLocais locais={dados.locais} />
        </div>
    );
};

export default SeuComponentePai;