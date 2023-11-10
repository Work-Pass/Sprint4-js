function Corpo4() {
    return(
        <section className="container" id="contrar">
            <div className=" my-4">
                <h1 className="fw-bold fst-italic fs-1">Como contratar o WorkPass</h1>
            </div>
            <div className="d-md-flex">
                <div className="border border-0 bg-color-gray m-2 p-3 col-md-6 rounded-4 text-center">
                    <h2 className="p-2 text-danger">Para empresas</h2>
                    <br/>
                        <p>Você como empresa deseja implementar o Work Pass?</p>
                        <button type="button" className="btn btn-danger rounded-4" id="botao-laranja">Solicitar Orçamento</button>
                </div>
                <div className="border border-0 bg-color-gray m-2 p-3 col-md-6 rounded-4 text-center">
                    <h2 className="p-2 text-warning">Para Colaboradores</h2>
                    <br/>
                        <p>Sua empresa oferece Work Pass?</p>
                        <button type="button" className="btn btn-warning rounded-4 text-light">Verificar Elegibilidade</button>
                </div>
            </div>
        </section>
    )
}
export default Corpo4