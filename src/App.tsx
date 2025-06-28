import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Inicio from './pages/Inicio';
import Clientes from './pages/Clientes/Clientes';
import EditarCliente from './pages/Clientes/EditarCliente';
import CadastrarCliente from './pages/Clientes/CadastrarCliente';
import Produtos from './pages/Produtos/Produtos';
import EditarProduto from './pages/Produtos/EditarProduto';
import CadastrarProduto from './pages/Produtos/CadastrarProduto';
import Servicos from './pages/Servicos/Servicos';
import EditarServico from './pages/Servicos/EditarServico';
import CadastrarServico from './pages/Servicos/CadastrarServico';
import Pedidos from './pages/Pedidos';
import NovaCompra from './pages/NovaCompra';
import Metricas from './pages/Metricas';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/editar-cliente" element={<EditarCliente />} />
            <Route path="/cadastrar-cliente" element={<CadastrarCliente />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/editar-produto" element={<EditarProduto />} />
            <Route path='/cadastrar-produto' element={<CadastrarProduto />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/editar-servico" element={<EditarServico />} />
            <Route path="/cadastrar-servico" element={<CadastrarServico />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/nova-compra" element={<NovaCompra />} />
            <Route path="/metricas" element={<Metricas />} />
          </Routes>
        </div>
      </Router>
    );
  }
};

export default App;