import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          18:21にstagingを編集、18:30にマージしてみる!(19:52にさらに変更)、8/20日にterraform化してみる
        </p>
        <p>
          さらにlocalブランチを作り18:23にpush
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
