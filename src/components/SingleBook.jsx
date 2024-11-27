import { Col, Card, Button } from 'react-bootstrap'

const SingleBook = (book) => {
  return (
    <>
      <Col className="col-12 col-md-6 col-lg-3">
        <Card style={{ margin: '1em' }}>
          <Card.Img variant="top" src={book.img} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Price €{book.price}</Card.Text>
            <Button variant="primary">Add Chart</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default SingleBook
