import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleBotaoUm = this.handleBotaoUm.bind(this);
    this.handleBotaoDois = this.handleBotaoDois.bind(this);
    this.handleBotaoTres = this.handleBotaoTres.bind(this);

    this.state = {
      cliqueBtUm: 0,
      cliqueBtDois: 0,
      cliqueBtTres: 0,

    }
  }

  handleBotaoUm() {
    const { cliqueBtUm } = this.state;
    this.setState((previous) => ({
      cliqueBtUm: previous.cliqueBtUm + 1,
    }), () => {
      console.log(`Clicou no primeiro botão ${this.corBotao(cliqueBtUm)}`);
    });
  }

  handleBotaoDois() {
    const { cliqueBtDois } = this.state;
    console.log('Clicou no segundo botão');
    this.setState((previous) => ({
      cliqueBtDois: previous.cliqueBtDois + 1,
    }), () => {
      console.log(`Clicou no segundo botão ${this.corBotao(cliqueBtDois)}`);
    });
  }

  handleBotaoTres() {
    const { cliqueBtTres } = this.state;
    console.log('Clicou no terceiro botão');
    this.setState((previous) => ({
      cliqueBtTres: previous.cliqueBtTres + 1,
    }), () => {
      console.log(`Clicou no terceiro botão ${this.corBotao(cliqueBtTres)}`);
    });
  }

  corBotao(numero) {
    return numero % 2 === 0 ? 'green' : 'red';
  }

  render() {
    const { cliqueBtUm, cliqueBtDois, cliqueBtTres } = this.state;

    return (
    <div>
      <button type='button' onClick={ this.handleBotaoUm } style={ { color: this.corBotao(cliqueBtUm)} } >
        {`Número de cliques: ${cliqueBtUm}`}
      </button>

      <button type='button' onClick={ this.handleBotaoDois } style={ { color: this.corBotao(cliqueBtDois)} } >
        {`Número de cliques: ${cliqueBtDois}`}
      </button>

      <button type='button' onClick={ this.handleBotaoTres } style={ { color: this.corBotao(cliqueBtTres)} } >
        {`Número de cliques: ${cliqueBtTres}`}
      </button>
    </div>
    )
  }
}

export default App;
