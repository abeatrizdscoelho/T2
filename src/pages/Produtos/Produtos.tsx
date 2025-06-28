import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class Produtos extends Component {
  render() {
    return (
      <div>
        <h2>Produtos</h2>
        <p>Produtos da World Beauty...</p>
        <>
          <div>
            <table className="table">
              <thead className='table-light'>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Produto</th>
                  <th scope="col">Preço (R$)</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Excluir</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Shampoo Hidratante Argan Oil (300ml)</td>
                  <td>R$29,90</td>
                  <td>
                    <a href="/editar-produto">
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
                  <td>Condicionador Argan Oil (300ml)</td>
                  <td>R$31,90</td>
                  <td>
                    <a href="/editar-produto">
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
                  <td>Hidratante Corporal Flor de Cerejeira</td>
                  <td>R$27,50</td>
                  <td>
                    <a href="/editar-produto">
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
                  <td>Óleo Corporal Amêndoas Doce (100ml)</td>
                  <td>R$22,00</td>
                  <td>
                    <a href="/editar-produto">
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
                  <td>Protetor Solar Facial FPS 50 (60g)</td>
                  <td>R$35,90</td>
                  <td>
                    <a href="/editar-produto">
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
              <Link to="/cadastrar-produto" className='btn btn-purple'>Cadastrar Produto</Link>
            </div>
          </div>
        </>
      </div>
    );
  }
};

export default Produtos;