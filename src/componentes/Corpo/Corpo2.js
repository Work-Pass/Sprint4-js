import './Corpo.css';
import React from 'react';
import DadosAPI from './DadosAPI';

function Corpo2() {
    return (
        <section className="container mt-4" id="secao2">
            <div className="container row bg">
                <h1 className="fw-bold fst-italic fs-1 my-4">Workstations próximas de você</h1>
            </div>
            <div className="border border-dark rounded-4 align-items-center bg-color-gray d-flex">
                <div className="align-items-center p-2 d-md-flex">
                    <DadosAPI />
                </div>
                <div className="p-2">
                    <img src="/imagens/Mapa.png" alt="Mapa com workstations proximas" className="img-fluid border-start border-dark align-items-center ps-3"/>
                </div>
            </div>
        </section>
    );
}

export default Corpo2;
