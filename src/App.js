import './App.css';
import LoginPage from './pages/Login Page/LoginPage';
import Player from './pages/Player/Player';

function App() {
  const code = new URLSearchParams(window.location.search).get("code")
  return (
    <div className="App">
      {code ? <Player /> : <LoginPage />}
    </div>
  );
}

export default App;
