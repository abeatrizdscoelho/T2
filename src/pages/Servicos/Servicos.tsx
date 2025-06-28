import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class Servicos extends Component {
  render() {
    return (
      <div>
        <h2>Serviços</h2>
        <p>Serviços oferecidos pela World Beauty...</p>
        <>
          <div>
            <table className="table">
              <thead className='table-light'>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Serviço</th>
                  <th scope="col">Preço (R$)</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Excluir</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Corte de Cabelo Feminino</td>
                  <td>R$45,00</td>
                  <td>
                    <a href="/editar-servico">
                      <img src="https://img.icons8.com/?size=20&id=86023&format=png&color=000000" alt="Editar" />
                    </a>
                  </td>
                  <td>
                    <a href="">
                      <img src="https://img.icons8.com/?size=20&id=nS7wslGWJu0R&format=png&color=000000" alt="Excluir" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Corte de Cabelo Masculino</td>
                  <td>R$35,00</td>
                  <td>
                    <a href="/editar-servico">
                      <img src="https://img.icons8.com/?size=20&id=86023&format=png&color=000000" alt="Editar" />
                    </a>
                  </td>
                  <td>
                    <a href="">
                      <img src="https://img.icons8.com/?size=20&id=nS7wslGWJu0R&format=png&color=000000" alt="Excluir" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Hidratação Capilar</td>
                  <td>R$60,00</td>
                  <td>
                    <a href="/editar-servico">
                      <img src="https://img.icons8.com/?size=20&id=86023&format=png&color=000000" alt="Editar" />
                    </a>
                  </td>
                  <td>
                    <a href="">
                      <img src="https://img.icons8.com/?size=20&id=nS7wslGWJu0R&format=png&color=000000" alt="Excluir" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Luzes ou Mechas</td>
                  <td>R$200,00</td>
                  <td>
                    <a href="/editar-servico">
                      <img src="https://img.icons8.com/?size=20&id=86023&format=png&color=000000" alt="Editar" />
                    </a>
                  </td>
                  <td>
                    <a href="">
                      <img src="https://img.icons8.com/?size=20&id=nS7wslGWJu0R&format=png&color=000000" alt="Excluir" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Escova Progressiva</td>
                  <td>R$180,00</td>
                  <td>
                    <a href="/editar-servico">
                      <img src="https://img.icons8.com/?size=20&id=86023&format=png&color=000000" alt="Editar" />
                    </a>
                  </td>
                  <td>
                    <a href="">
                      <img src="https://img.icons8.com/?size=20&id=nS7wslGWJu0R&format=png&color=000000" alt="Excluir" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='text-center mt-4'>
              <Link to="/cadastrar-servico" className='btn btn-purple'>Cadastrar Serviço</Link>
            </div>
          </div>
        </>
      </div>
    );
  }
};

export default Servicos;