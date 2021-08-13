import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          これはstating環境、17:52に編集
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
