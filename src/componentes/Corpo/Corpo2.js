// Corpo2.js
import './Corpo.css';
import React from 'react';
import DadosAPI from './DadosAPI'; // Sem caminho relativo, pois ambos estão no mesmo diretório

function Corpo2() {
    return (
        <section className="container mt-4" id="secao2">
            <div className="container row bg">
                <h1 className="fw-bold fst-italic fs-1 my-4">Workstations próximas de você</h1>
            </div>
            <div className="border border-dark rounded-4 align-items-center bg-color-gray">
                <div className="align-items-center p-2 d-md-flex">
                    {/* Outros componentes ou elementos aqui */}
                    <DadosAPI />
                    {/* Outros componentes ou elementos aqui */}
                </div>
            </div>
        </section>
    );
}

export default Corpo2;
