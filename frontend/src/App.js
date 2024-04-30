import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
      <h1>Well Come to User Management System</h1>
      <button className="user-button" onClick={()=>navigate('/users')}>Start</button>
      </header>
    </div>
  );
}

export default App;
