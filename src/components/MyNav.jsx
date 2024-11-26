import { Navbar, Container, Nav } from 'react-bootstrap'

const MyNav = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className=''>
      <Container fluid={props.isFluid || true}>
        <Navbar.Brand href="#home">Epi-Library</Navbar.Brand>
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
