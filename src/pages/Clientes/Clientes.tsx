import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class Clientes extends Component {
  render() {
    return (
      <div>
        <h2>Clientes</h2>
        <p>Clientes cadastrados na World Beauty...</p>
        <>
          <div>
            <table className="table">
              <thead className='table-light'>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Nome Social</th>
                  <th scope="col">Gênero</th>
                  <th scope="col">RG</th>
                  <th scope="col">CPF</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Excluir</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Ana Beatriz Castro</td>
                  <td>Bia Castro</td>
                  <td>Feminino</td>
                  <td>12.345.678-9</td>
                  <td>123.456.789-00</td>
                  <td>(11) 91234-5678</td>
                  <td>
                    <a href="/editar-cliente">
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
                  <td>João Marcos Oliveira</td>
                  <td>João Oliveira</td>
                  <td>Masculino</td>
                  <td>98.765.432-1</td>
                  <td>987.654.321-00</td>
                  <td>(21) 99876-5432</td>
                  <td>
                    <a href="/editar-cliente">
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
                  <td>Lucas Freitas Souza</td>
                  <td>Lu Freitas</td>
                  <td>Outro</td>
                  <td>32.165.498-7</td>
                  <td>321.654.987-10</td>
                  <td>(31) 93216-5498</td>
                  <td>
                    <a href="/editar-cliente">
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
                  <td>Mariana Lopes Dias</td>
                  <td>Mari Lopes</td>
                  <td>Feminino</td>
                  <td>45.678.912-3</td>
                  <td>456.789.123-77</td>
                  <td>(41) 94567-8912</td>
                  <td>
                    <a href="/editar-cliente">
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
                  <td>Pedro Henrique Silva</td>
                  <td>PH Silva</td>
                  <td>Masculino</td>
                  <td>65.412.398-7</td>
                  <td>654.123.987-33</td>
                  <td>(61) 96541-2398</td>
                  <td>
                    <a href="/editar-cliente">
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
              <Link to="/cadastrar-cliente" className='btn btn-purple'>Cadastrar Cliente</Link>
            </div>
          </div>
        </>
      </div>
    );
  }
};

export default Clientes;