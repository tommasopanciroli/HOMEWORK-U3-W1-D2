import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyWelcome from './components/MyWelcome'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'


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
          
            <SingleBook />
             {/* <BookList /> */}
            
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
