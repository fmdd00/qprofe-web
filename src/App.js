import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Rutas from './components/Rutas';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Rutas />
      </div>
    </Router>
  );
}

export default App;
