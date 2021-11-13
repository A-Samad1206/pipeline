import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h4>FIRST_ENVV={process.env.REACT_APP_FIRST_ENV}</h4>
        <h4>MY_NAME={process.env.REACT_APP_MY_NAME}</h4>
      </header>
    </div>
  );
}

export default App;
