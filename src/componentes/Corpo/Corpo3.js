import './Corpo.css'
function Corpo3() {
    return (
        <section className="container" id="secao4">
            <div className="fw-bold fst-italic fs-1 my-4">
                <h1>O que os WorkStations oferecem</h1>
            </div>
            <div className="d-md-flex py-2 text-center m-auto">
                <div className=" col-md-3 border border-0 bg-color-gray m-2 rounded-2 p-2">
                    <h2 className="">Sala Privativa</h2>
                    <img src="/imagens/salaprivativa.jpg" alt="sala privativa" className="px-3 img-fluid"/>
                        <p className="p-2">Uma sala exclusiva para você, equipada com mesas e cadeiras.</p>
                </div>
                <div className=" col-md-3 border border-0 bg-color-gray m-2 rounded-2 p-2">
                    <h2 className="">Co-Estações</h2>

                    <img src="/imagens/salacompartilhada.jpg" alt="Estações Compartilhadas" className="px-3 img-fluid"/>
                        <p className="p-2">Estações compartilhadas com posições fixas ou móveis.</p>
                </div>
                <div className="col-md-3 border border-0 bg-color-gray m-2 rounded-2 p-2">
                    <h2 className="">Salas de Reunião</h2>

                    <img src="/imagens/saladereuniao.jpeg" alt="sala de reuniao" className="px-3 img-fluid"/>
                        <p className="p-2">Salas de reuniões privativas que podem ser utilizadas sobre demanda.</p>
                </div>
                <div className="col-md-3 border border-0 bg-color-gray m-2 rounded-2 p-2">
                    <h2 className="">Cafeteria</h2>
                    <img src="/imagens/cafeteria.jpg" alt="Cafeteria" className="px-3 img-fluid"/>
                        <p className="p-2">Cafeteria colaborativa equipada e preparada para receber todos.</p>
                </div>
            </div>
        </section>
    )
}
export default Corpo3