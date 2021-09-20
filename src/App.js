import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          9/20 環境変数REACT_APP_NODE_ENVの値は{process.env.REACT_APP_NODE_ENV}
        </p>
        <a
          className="App-link"
          href="https://django.baby"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Django
        </a>
      </header>
    </div>
  );
}

export default App;
