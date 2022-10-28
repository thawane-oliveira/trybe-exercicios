import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import ResultCharacter from './components/ResultCharacter';
import { thunkRequestCharacter } from './redux/actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      character: ''
    }
  }
  render() {
    const { character } = this.state;
    const { dispatch } = this.props;
    return (
      <>
      <input
      type="text"
      onChange={({ target }) => this.setState({ character: target.value })}
      value={character}
      />
      <button
      type='button'
      onClick={ () => dispatch(thunkRequestCharacter(character)) }
      >
        Pesquisar
      </button>
      <ResultCharacter />
      </>
    );
  }
}

export default connect()(App);
