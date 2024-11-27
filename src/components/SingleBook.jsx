import { Col, Card, Button } from 'react-bootstrap'


const SingleBook = (props) => {
    const libro = props.libro
  return (
    <>
      <Col className="col-12 col-md-6 col-lg-3">
        <Card style={{ margin: '1em' }}>
          <Card.Img variant="top" src={libro.img} alt={libro.title} />
          <Card.Body>
            <Card.Title>{libro.title}</Card.Title>
            <Card.Text>Price €{libro.price}</Card.Text>
            <Button variant="primary">Add Chart</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default SingleBook
