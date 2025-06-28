import { Component } from 'react';
import '../style.css';

class EditarCliente extends Component {
    render() {
        return (
            <div className="container">
                <h2 className='mb-4 text-center'>Editar Cliente</h2>
                <div className="card shadow border p-4">
                    <form>
                        <div className="row mt-4 mb-3">
                            <div className="col-md-6">
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="nome" placeholder="Digite o nome" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                                <input type="text" className="form-control" id="sobrenome" placeholder="Digite o sobrenome" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nomeSocial" className="form-label">Nome Social</label>
                            <input type="text" className="form-control" id="nomeSocial" placeholder="Digite o nome social" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="genero" className="form-label">Gênero</label>
                            <select className="form-select" id="genero">
                                <option defaultValue="">Selecione o gênero</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="rg" className="form-label">RG</label>
                                <input type="text" className="form-control" id="rg" placeholder="00.000.000-0" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="cpf" className="form-label">CPF</label>
                                <input type="text" className="form-control" id="cpf" placeholder="000.000.000-00" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefone" className="form-label">Telefone</label>
                            <input type="text" className="form-control" id="telefone" placeholder="(00) 00000-0000" />
                        </div>
                        <div className='text-center'>
                            <button type="submit" className="btn btn-purple">Editar Cliente</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default EditarCliente;