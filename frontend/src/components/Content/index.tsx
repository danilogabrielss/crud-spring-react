function Content() {
    return (
        <div>
            <div className="card mb-4 rounded-3 frete-index">
                <div className="card-header py-3">
                    <h4 className="card-title pricing-card-title">Origem : <small className="text-muted fw-light">Santos/SP</small></h4>
                    <h4 className="card-title pricing-card-title">Destino: <small className="text-muted fw-light">São Paulo/SP</small></h4>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled mt-1 mb-3">
                        <li>Preco: R$ 1500 </li>
                        <li>Data de coleta : 09/09/2021</li>
                        <li>Data de entrega : 10/09/2021</li>
                        <li>Peso: 26 ton</li>
                        <li>Veiculo: Carreta, Carrela LS</li>
                        <li>Carroceria: Grade baixa, Bug porta container</li>
                    </ul>
                    <button type="button" className="fs-6 w-100 btn btn-lg btn-outline-primary">Clique para ver mais detalhes sobre o frete</button>
                </div>
            </div>
            <div className="card mb-4 rounded-3 frete-index">
                <div className="card-header py-3">
                    <h4 className="card-title pricing-card-title">Origem : <small className="text-muted fw-light">Santos/SP</small></h4>
                    <h4 className="card-title pricing-card-title">Destino: <small className="text-muted fw-light">São Paulo/SP</small></h4>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled mt-1 mb-3">
                        <li>Preco: R$ 1500 </li>
                        <li>Data de coleta : 09/09/2021</li>
                        <li>Data de entrega : 10/09/2021</li>
                        <li>Peso: 26 ton</li>
                        <li>Veiculo: Carreta, Carrela LS</li>
                        <li>Carroceria: Grade baixa, Bug porta container</li>
                    </ul>
                    <button type="button" className="fs-6 w-100 btn btn-lg btn-outline-primary">Clique para ver mais detalhes sobre o frete</button>
                </div>
            </div>
        </div>
    );
}

export default Content;