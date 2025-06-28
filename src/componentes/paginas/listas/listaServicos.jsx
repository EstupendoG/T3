const ListaServico = ({}) => {
    return (
        <>
            <h1>🛠️  Listagem de todos os Serviços</h1>
            <br />
            
            <table className="table table-hover table-striped table-borderless">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>Banho e Tosa</td>
                        <td>R$43,99</td>
                        <td style={{width:'10px'}}>
                            <div className="d-flex gap-1">
                                <button className="btn btn-outline-warning">
                                    <i className="bi bi-pencil-fill"></i>
                                </button>

                                <button className="btn btn-outline-danger">
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ListaServico