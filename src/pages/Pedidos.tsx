import { Component } from 'react';

type AbaAtiva = 'produtos' | 'servicos';

interface State {
  abaAtiva: AbaAtiva;
}

class Pedidos extends Component<{}, State> {
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
        <h2>Pedidos</h2>
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
              <h5>Pedidos de Produtos</h5>
              <p>Lista de pedidos de produtos...</p>
              <div>
                <table className="table">
                  <thead className='table-light'>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Cliente</th>
                      <th scope="col">CPF</th>
                      <th scope="col">ID_Produto</th>
                      <th scope="col">Produto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Ana Beatriz Castro</td>
                      <td>123.456.789-00</td>
                      <td>1</td>
                      <td>Shampoo Hidratante Argan Oil (300ml)</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>João Marcos Oliveira</td>
                      <td>987.654.321-00</td>
                      <td>2</td>
                      <td>Condicionador Argan Oil (300ml)</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Lucas Freitas Souza</td>
                      <td>321.654.987-10</td>
                      <td>3</td>
                      <td>Hidratante Corporal Flor de Cerejeira</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Mariana Lopes Dias</td>
                      <td>456.789.123-77</td>
                      <td>4</td>
                      <td>Óleo Corporal Amêndoas Doce (100ml)</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Pedro Henrique Silva</td>
                      <td>654.123.987-33</td>
                      <td>5</td>
                      <td>Protetor Solar Facial FPS 50 (60g)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {abaAtiva === 'servicos' && (
            <div>
              <h5>Pedidos de Serviços</h5>
              <p>Lista de pedidos de serviços...</p>
              <div>
                <table className="table">
                  <thead className='table-light'>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Cliente</th>
                      <th scope="col">CPF</th>
                      <th scope="col">ID_Servico</th>
                      <th scope="col">Serviço</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Ana Beatriz Castro</td>
                      <td>123.456.789-00</td>
                      <td>1</td>
                      <td>Corte de Cabelo Feminino</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>João Marcos Oliveira</td>
                      <td>987.654.321-00</td>
                      <td>2</td>
                      <td>Corte de Cabelo Masculino</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Lucas Freitas Souza</td>
                      <td>321.654.987-10</td>
                      <td>3</td>
                      <td>Hidratação Capilar</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Mariana Lopes Dias</td>
                      <td>456.789.123-77</td>
                      <td>5</td>
                      <td>Escova Progressiva</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Pedro Henrique Silva</td>
                      <td>654.123.987-33</td>
                      <td>4</td>
                      <td>Luzes ou Mechas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Pedidos;