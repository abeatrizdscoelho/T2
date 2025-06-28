import React, { Component } from 'react';

type MetricasState = {
  metricaSelecionada: string;
};

class Metricas extends Component<{}, MetricasState> {
    constructor(props: {}) {
        super(props);
        this.state = { metricaSelecionada: '' };
    };

    handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ metricaSelecionada: e.target.value });
    };

    renderizarConteudo = () => {
        const { metricaSelecionada } = this.state;
        switch (metricaSelecionada) {
            case 'clientesGenero':
                return <p>Lista de todos os clientes separados por gênero...</p>;
            case 'maisConsumidos':
                return <p>Lista de produtos e serviços gerais mais consumidos...</p>;
            case 'consumoPorGenero':
                return <p>Lista de produtos e serviços mais consumidos por gênero...</p>;
            case '10ClientesMaisConsumiram':
                return <p>Lista de 10 clientes que mais consumiram em quantidade...</p>;
            case '10ClientesMenosConsumiram':
                return <p>Lista de 10 clientes que menos consumiram produtos ou serviços...</p>;
            case '5ClientesMaisConsumiramValor':
                return <p>Lista de 5 clientes que mais consumiram em valor...</p>;
            default:
                return <p>Selecione uma métrica para visualizar.</p>;
        }
    }

    render() {
    const { metricaSelecionada } = this.state;

    return(
            <div className = "container mt-5" >
                <h2 className="text-center mb-4">Métricas da World Beauty</h2>
                <div className="mb-4 text-center">
                    <select
                        className="form-select w-50 mx-auto"
                        value={metricaSelecionada}
                        onChange={this.handleChange}
                    >
                        <option value="">Selecione uma métrica</option>
                        <option value="clientesGenero">Todos os clientes por gênero</option>
                        <option value="maisConsumidos">Produtos e serviços gerais mais consumidos</option>
                        <option value="consumoPorGenero">Produtos e serviços mais consumidos por gênero</option>
                        <option value="10ClientesMaisConsumiram">10 clientes que mais consumiram em quantidade</option>
                        <option value="10ClientesMenosConsumiram">10 clientes que menos consumiram produtos ou serviços</option>
                        <option value="5ClientesMaisConsumiramValor">5 clientes que mais consumiram em valor</option>
                    </select>
                </div>
                <div className="border rounded p-4 bg-light">
                    {this.renderizarConteudo()}
                </div>
            </div>
        );
    }
};

export default Metricas;