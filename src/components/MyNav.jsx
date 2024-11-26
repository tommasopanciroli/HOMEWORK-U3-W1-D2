import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav } from 'react-bootstrap'

const MyNav = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid={props.isFluid || true}>
        <Navbar.Brand href="#home">Kindle Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
