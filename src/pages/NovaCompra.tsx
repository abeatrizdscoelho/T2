import { Component } from 'react';

type AbaAtiva = 'produtos' | 'servicos';

interface State {
  abaAtiva: AbaAtiva;
}

class NovaCompra extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { abaAtiva: 'produtos' };
  }

  setAbaAtiva = (aba: AbaAtiva) => {
    this.setState({ abaAtiva: aba });
  };

  render() {
    const { abaAtiva } = this.state;

    return (
      <div className="container mt-4">
        <h2>Compras</h2>
        <p>Registre aqui uma nova compra...</p>
        <ul className="nav nav-tabs mt-4">
          <li className="nav-item">
            <button
              className={`nav-link ${abaAtiva === 'produtos' ? 'active' : ''}`}
              onClick={() => this.setAbaAtiva('produtos')}
            >
              Produtos
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${abaAtiva === 'servicos' ? 'active' : ''}`}
              onClick={() => this.setAbaAtiva('servicos')}
            >
              Serviços
            </button>
          </li>
        </ul>

        <div className="mt-4">
          {abaAtiva === 'produtos' && (
            <div>
              <h5 className='mb-3'>Compra de Produtos</h5>
              <div className='card shadow border p-4'>
                <form className="mt-3">
                  <div className="mb-3">
                    <label htmlFor="cpfCliente" className="form-label">CPF do Cliente</label>
                    <input type="text" className="form-control" id="cpfCliente" placeholder="Digite o CPF" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="produto" className="form-label">Produto (ID ou Nome)</label>
                    <input type="text" className="form-control" id="produto" placeholder="Digite o ID ou nome do produto" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="quantidade" className="form-label">Quantidade</label>
                    <input type="number" className="form-control" id="quantidade" min="1" placeholder='Digite a quantidade' />
                  </div>
                  <div className="text-center mt-3">
                    <button type="submit" className="btn btn-purple">Registrar Compra</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {abaAtiva === 'servicos' && (
            <div>
              <h5 className='mb-3'>Compra de Serviços</h5>
              <div className='card shadow border p-4'>
                <form className="mt-3">
                  <div className="mb-3">
                    <label htmlFor="cpfCliente" className="form-label">CPF do Cliente</label>
                    <input type="text" className="form-control" id="cpfCliente" placeholder="Digite o CPF" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="servico" className="form-label">Serviço (ID ou Nome)</label>
                    <input type="text" className="form-control" id="servico" placeholder="Digite o ID ou nome do serviço" />
                  </div>
                  <div className="text-center mt-3">
                    <button type="submit" className="btn btn-purple">Registrar Compra</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default NovaCompra;