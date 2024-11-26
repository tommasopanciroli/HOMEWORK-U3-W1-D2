import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './components/MyNav';

function App() {
  return (
    <div className="App">
      <header>
        <MyNav isFluid={true} />
      </header>
    </div>
  );
}

export default App;
