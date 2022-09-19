import logo from './logo.svg';
import './App.css';

function App() {
  const items = [
    {id: 2, name:'xablau'}, 
    {id: 4, name:'pizza'},
    {id: 6, name:'danone'},
    {id: 8, name:'sorvete'},
    {id: 10, name:'esfiha'}
  ];
  return (
    <>
      <nav>xd</nav>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            {items.map((item) => {
              return <p>{item.id} - {item.name}</p>
            })}
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
