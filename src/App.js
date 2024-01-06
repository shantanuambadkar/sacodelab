import logo from './logo.png';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  function navigateToOurWork() {
    navigate('/ourwork');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button className="btn btn-blue" onClick={navigateToOurWork}>
            To know more about us, click here..
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
