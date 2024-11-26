import { Component } from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import book from '../data/books/horror.json'

class AllTheBooks extends Component {
  render() {
    return (
      <>
        {book.map((libro) => (
          <Col className="col-12 col-md-6 col-lg-3" key={libro.asin}>
            <Card style={{ margin: '1em' }} >
              <Card.Img variant="top" src={libro.img} alt={libro.title} />
              <Card.Body>
                <Card.Title>{libro.title}</Card.Title>
                <Card.Text>Price €{libro.price}</Card.Text>
                <Button variant="primary">Add Chart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </>
    )
  }
}

export default AllTheBooks
