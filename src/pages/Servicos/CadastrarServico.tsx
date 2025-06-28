import { Component } from 'react';
import '../style.css';

class CadastrarServico extends Component {
    render() {
        return (
            <div className="container">
                <h2 className='mb-4 text-center'>Cadastro de Serviço</h2>
                <div className="card shadow border p-4">
                    <form>
                        <div className="row mt-4 mb-3">
                            <div className="col-md-6">
                                <label htmlFor="servico" className="form-label">Serviço</label>
                                <input type="text" className="form-control" id="servico" placeholder="Digite o serviço" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="preco" className="form-label">Preço do Serviço</label>
                                <input type="text" className="form-control" id="preco" placeholder="R$0,00" />
                            </div>
                        </div>
                        <div className='text-center'>
                            <button type="submit" className="btn btn-purple mt-2">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default CadastrarServico;