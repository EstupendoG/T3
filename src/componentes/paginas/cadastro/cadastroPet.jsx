const CadastroPet = ({tema}) => {
    return (
        <>
            <h1>🐱 Cadastro de Pet</h1>
            <br />
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CPF do dono" aria-label="CPF do dono" aria-describedby="basic-addon1" />
                </div>

                <br />

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do Pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" />
                </div>

                <div className="row">
                    <div className="col">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tipo do Pet" aria-label="Tipo do Pet" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Raça do Pet" aria-label="Raça do Pet" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group mb-3">
                            <select className="form-select" aria-label="Gênero do Pet">
                                <option selected disabled>Gênero do Pet</option>
                                <option value="macho">Macho</option>
                                <option value="femea">Fêmea</option>
                            </select>
                        </div>
                    </div>
                </div>

                <br />

                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>

            </form>
        </>
    )
}

export default CadastroPet