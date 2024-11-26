import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyWelcome from './components/MyWelcome'
import AllTheBooks from './components/AllTheBooks'

function App() {
  return (
    <div className="App">
      <header>
        <MyNav isFluid={true} />
      </header>
      <MyWelcome />
      <main>
        <Container>
          <Row className="mt-3 d-flex justify-content-center">
          
              <AllTheBooks />
            
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter isFluid={true} />
      </footer>
    </div>
  )
}

export default App
