import './App.css';
import LoginPage from './pages/LoginPage';
import Player from './pages/Player';

function App() {
  const code = new URLSearchParams(window.location.search).get("code")
  return (
    <div className="App" >
      {code ? <Player code={code}/> : <LoginPage />}
    </div>
  );
}

export default App;
